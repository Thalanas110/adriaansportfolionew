import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ClientOnly } from "@/components/ClientOnly";
import { BootScreen } from "@/components/vault/BootScreen";
import { SceneBackdrop } from "@/components/vault/SceneBackdrop";
import { Nav } from "@/components/vault/Nav";
import { Hero } from "@/components/vault/Hero";
import { Dossier } from "@/components/vault/Dossier";
import { FieldOps } from "@/components/vault/FieldOps";
import { Archive } from "@/components/vault/Archive";
import { Transmission } from "@/components/vault/Transmission";
import { Footer, Marquee } from "@/components/vault/Footer";


const TITLE = "Adriaan M. Dimate — Software, QA & Aviation";
const DESC =
  "3D vault-terminal portfolio of Adriaan M. Dimate: autistic software engineer, QA engineer, and aviation student. Where code meets cockpit.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <ClientOnly>
        <BootScreen />
      </ClientOnly>
      <SceneBackdrop />
      <Nav />

      <div className="relative z-10">
        <Hero />
        <Marquee />
        <Dossier />
        <FieldOps />
        <Archive />
        <Transmission />
        <Footer />
      </div>
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
