import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "@/components/ClientOnly";

const RadScene = lazy(() => import("./RadScene"));

/** Fixed 3D backdrop behind the whole terminal. Client-only (WebGL). */
export function SceneBackdrop() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setEnabled(false);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 grid-floor opacity-[0.35]" />
      {enabled && (
        <ClientOnly>
          <Suspense fallback={null}>
            <RadScene />
          </Suspense>
        </ClientOnly>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_92%)]" />
    </div>
  );
}
