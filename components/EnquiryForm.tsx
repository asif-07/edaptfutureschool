"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { STREAMS, SITE } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "phone" | "stream", string>>;

/**
 * Lead-capture enquiry form.
 * Client-side validation, then POSTs to /app/api/enquiry/route.ts.
 * Shows an inline success state on completion.
 */
export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({ name: "", phone: "", stream: "", message: "" });

  function validate(): boolean {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    // Accept 10-digit Indian mobile numbers, optionally spaced.
    const digits = form.phone.replace(/\D/g, "");
    if (!digits) next.phone = "Please enter your phone number.";
    else if (digits.length < 10) next.phone = "Enter a valid 10-digit phone number.";
    if (!form.stream) next.stream = "Please select a stream.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", phone: "", stream: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="enquiry" className="relative bg-white py-24 text-ink sm:py-32">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: pitch */}
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              <span className="font-mono text-ink/40">06</span> / Enquire
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-display font-bold text-ink">
              Book your seat. We&apos;ll take it from here.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-ink/60">
              Tell us a little about you and we&apos;ll get in touch about Plus One admissions. Prefer to
              talk now?{" "}
              <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-electric underline-offset-4 hover:underline">
                Call {SITE.phoneDisplay}
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* Right: form / success */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-xl sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                <CheckCircle2 className="h-14 w-14 text-electric" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">Thank you!</h3>
                <p className="mt-2 max-w-sm text-ink/60">
                  Your enquiry has been received. Our admissions team will reach out shortly. For anything
                  urgent, call{" "}
                  <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-electric">
                    {SITE.phoneDisplay}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-ink/60 underline-offset-4 hover:text-ink hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field label="Full name" htmlFor="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    aria-invalid={!!errors.name}
                    className={inputCls(!!errors.name)}
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Phone number" htmlFor="phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    aria-invalid={!!errors.phone}
                    className={inputCls(!!errors.phone)}
                    placeholder="10-digit mobile number"
                  />
                </Field>

                <Field label="Stream of interest" htmlFor="stream" error={errors.stream}>
                  <select
                    id="stream"
                    name="stream"
                    value={form.stream}
                    onChange={(e) => setForm({ ...form, stream: e.target.value })}
                    aria-invalid={!!errors.stream}
                    className={inputCls(!!errors.stream)}
                  >
                    <option value="" disabled>
                      Select a stream
                    </option>
                    {STREAMS.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.code})
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message (optional)" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputCls(false)}
                    placeholder="Anything you'd like us to know?"
                  />
                </Field>

                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-600" role="alert">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" /> Something went wrong. Please try
                    again or call us.
                  </p>
                )}

                <button type="submit" disabled={status === "submitting"} className="btn-gradient w-full disabled:opacity-70">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      Submit Enquiry <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Form field wrapper with label + inline error message. */
function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean): string {
  return [
    "w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-ink/35",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-electric/40",
    hasError ? "border-red-400" : "border-ink/15 focus:border-electric",
  ].join(" ");
}
