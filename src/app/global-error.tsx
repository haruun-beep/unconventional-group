"use client";

import { useEffect } from "react";

// Last-resort boundary: catches errors thrown in the root layout itself, where
// the normal error.tsx can't help. It replaces the whole document, so it brings
// its own <html>/<body>. Same stale-chunk auto-recovery as error.tsx.
const RELOAD_KEY = "ug-chunk-reloaded";

function isChunkError(error: Error): boolean {
  const msg = `${error?.name ?? ""} ${error?.message ?? ""}`.toLowerCase();
  return (
    msg.includes("chunkloaderror") ||
    msg.includes("loading chunk") ||
    msg.includes("loading css chunk") ||
    msg.includes("dynamically imported module") ||
    msg.includes("failed to fetch")
  );
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (!isChunkError(error)) return;
    let alreadyReloaded = false;
    try {
      alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === "1";
      if (!alreadyReloaded) sessionStorage.setItem(RELOAD_KEY, "1");
    } catch {
      /* private mode */
    }
    if (!alreadyReloaded) window.location.reload();
  }, [error]);

  return (
    <html lang="en-CA">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#0a0a0a",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          gap: "1.25rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#39FF14",
            margin: 0,
          }}
        >
          Just a moment
        </h1>
        <p style={{ maxWidth: "32rem", color: "rgba(255,255,255,0.7)", margin: 0 }}>
          Something hiccuped while loading the page. A quick refresh usually sorts
          it out.
        </p>
        <button
          onClick={() => reset()}
          style={{
            background: "#39FF14",
            color: "#0a0a0a",
            fontWeight: 600,
            padding: "0.7rem 1.4rem",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reload
        </button>
      </body>
    </html>
  );
}
