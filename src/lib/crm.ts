// Best-effort server-to-server lead ingest into the UGroup CRM.
//
// Posts inbound site leads to the CRM's /api/leads/ingest endpoint, which lands
// them in the `prospects` review queue (NOT the live pipeline). Auth is an
// HMAC-SHA256 signature of the raw body using CRM_INGEST_SECRET — which must
// match the CRM's LEADS_INGEST_SECRET. If the secret isn't set, this no-ops
// (same graceful-degrade pattern as the Resend email). A CRM failure must NEVER
// break the visitor's response, so everything here swallows errors.

import crypto from "node:crypto";

const CRM_URL =
  process.env.CRM_INGEST_URL || "https://crm.unconventionalgroup.ca/api/leads/ingest";

type Consent =
  | "none"
  | "implied_conspicuous_publication"
  | "implied_existing_business"
  | "implied_inquiry"
  | "express";

export type CrmLead = {
  company: string;
  contact_name?: string | null;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  city?: string | null;
  province?: string | null;
  industry?: string | null;
  source?: string;
  source_query?: string | null;
  consent?: Consent;
};

export async function sendLeadToCrm(lead: CrmLead): Promise<void> {
  const secret = process.env.CRM_INGEST_SECRET;
  if (!secret) return; // not configured yet — no-op

  try {
    const clean: CrmLead = { ...lead };

    // company is required + non-empty; fall back to the best identifier we have.
    if (!clean.company || !clean.company.trim()) {
      clean.company = clean.contact_name?.trim() || clean.email?.trim() || "Website lead";
    }
    clean.company = clean.company.slice(0, 160);

    // phone must be >= 5 chars or the CRM rejects the whole row — drop if short.
    if (clean.phone && clean.phone.trim().length < 5) clean.phone = null;

    const raw = JSON.stringify(clean);
    const sig = crypto.createHmac("sha256", secret).update(raw).digest("hex");

    const res = await fetch(CRM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-signature": sig },
      body: raw,
      signal: AbortSignal.timeout(8000),
    });
    // Log outcome (status only — never the secret) so issues are visible in
    // Vercel runtime logs. 401 = secret mismatch; 5xx = CRM-side problem.
    if (!res.ok) {
      console.error(`crm ingest: non-OK ${res.status} for source=${clean.source ?? "?"}`);
    }
  } catch (err) {
    // Best-effort only. Email remains the backup record of every lead.
    console.error("crm ingest: request failed —", err instanceof Error ? err.message : err);
  }
}
