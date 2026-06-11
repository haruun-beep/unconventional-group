"use client";

import { useEffect } from "react";

// Route-level error boundary. Its single most important job: silently recover
// from stale-chunk errors. After a new deploy, a visitor whose tab loaded the
// old build will request JS chunks that no longer exist on the CDN — that throws
// a ChunkLoadError and, without this, surfaces a bare "this page couldn't load"
// screen. We detect that case and hard-reload once to pull the fresh build.
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

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (!isChunkError(error)) return;
    // Guard against a reload loop: only auto-reload once per session.
    let alreadyReloaded = false;
    try {
      alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === "1";
      if (!alreadyReloaded) sessionStorage.setItem(RELOAD_KEY, "1");
    } catch {
      /* private mode — fall through to the manual retry UI */
    }
    if (!alreadyReloaded) {
      window.location.reload();
    }
  }, [error]);

  return (
    <main
      style={{
        minHeight: "70vh",
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
        className="font-display"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#39FF14",
        }}
      >
        Just a moment
      </h1>
      <p style={{ maxWidth: "32rem", color: "rgba(255,255,255,0.7)" }}>
        Something hiccuped while loading this page. It&apos;s usually a quick
        refresh away.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
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
          Try again
        </button>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: "transparent",
            color: "#fff",
            fontWeight: 600,
            padding: "0.7rem 1.4rem",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.25)",
            cursor: "pointer",
          }}
        >
          Reload page
        </button>
      </div>
    </main>
  );
}
