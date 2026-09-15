"use client";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          backgroundColor: "#f6f1ea",
          color: "#2b1d14",
        }}
      >
        <div style={{ maxWidth: 420, textAlign: "center" }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c0603a",
            }}
          >
            Something went wrong
          </p>
          <h1 style={{ margin: "12px 0 0", fontSize: 28, lineHeight: 1.2 }}>
            The site hit an unexpected error
          </h1>
          <p style={{ margin: "16px 0 0", color: "#4a4038", lineHeight: 1.6 }}>
            Please try again in a moment. If the problem continues, reach out
            to us directly and we&apos;ll help right away.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => retry()}
              style={{
                padding: "12px 24px",
                borderRadius: 14,
                border: "none",
                backgroundColor: "#2b1d14",
                color: "#f6f1ea",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- global-error replaces the root layout, so a plain reload-safe link is used instead of next/link */}
            <a
              href="/"
              style={{
                padding: "12px 24px",
                borderRadius: 14,
                border: "1px solid rgba(43, 29, 20, 0.3)",
                color: "#2b1d14",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
