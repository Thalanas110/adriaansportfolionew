import { useState } from "react";
import { toast } from "sonner";
import { channels, profile } from "@/data/portfolio";
import { Reveal, SectionHeader, Tilt } from "./primitives";

export function Transmission() {
  const [body, setBody] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const mail = `mailto:${profile.email}?subject=${encodeURIComponent(
      `[TX] ${subject}`,
    )}&body=${encodeURIComponent(`${body}\n\n— ${name} (${email})`)}`;
    window.location.href = mail;
    toast.success("TRANSMISSION QUEUED", { description: "Opening your encrypted mail client…" });
  };

  const field =
    "w-full border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-rad focus:shadow-[0_0_18px_-8px_var(--rad)]";

  return (
    <section id="transmission" className="relative scroll-mt-20 px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader code="TX://" title="OPEN TRANSMISSION" tag="//COMMS-ARRAY" />

        <Reveal className="mb-6">
          <p className="tick-label text-rad">☢ Available channels</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <Tilt max={10} className="h-full">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="panel corner-marks group flex h-full flex-col p-5 transition-shadow hover:box-glow"
                >
                  <span className="text-xl">{c.glyph}</span>
                  <p className="mt-4 text-[0.65rem] tracking-[0.2em] text-signal">{c.label}</p>
                  <p className="mt-1 text-sm text-foreground">{c.value}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>
                  <span className="mt-auto pt-5 text-rad transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="panel corner-marks scanlines p-6 sm:p-8">
            <p className="tick-label text-rad">TRANSMISSION_TERMINAL_v2.4</p>
            <p className="mt-2 text-xs text-signal">
              &gt; Compose encrypted message. All fields required.
              <span className="animate-caret"> █</span>
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="tick-label">Identifier [name]</span>
                  <input required name="name" className={field} placeholder="ENTER NAME" />
                </label>
                <label className="grid gap-2">
                  <span className="tick-label">Uplink [email]</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className={field}
                    placeholder="ENTER EMAIL"
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="tick-label">Frequency [subject]</span>
                <input required name="subject" className={field} placeholder="ENTER SUBJECT" />
              </label>
              <label className="grid gap-2">
                <span className="tick-label">Message body</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className={field}
                  placeholder="BEGIN TRANSMISSION..."
                />
              </label>

              <div className="flex items-center justify-between gap-4">
                <span className="tick-label">{body.length} CHARS</span>
                <button
                  type="submit"
                  className="border border-rad bg-rad/10 px-7 py-3 text-xs tracking-[0.24em] text-rad transition-all hover:bg-rad hover:text-primary-foreground hover:shadow-[0_0_28px_-6px_var(--rad)]"
                >
                  ▶ SEND TRANSMISSION
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
