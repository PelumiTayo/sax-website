"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const EVENT_TYPES = [
  "Wedding",
  "Private Event",
  "Corporate Event",
  "Concert / Show",
  "Artist Collaboration",
  "Studio Session",
  "Other",
] as const;

// Guest count only matters for these gathering-style events.
const GUEST_RELEVANT = new Set([
  "Wedding",
  "Private Event",
  "Corporate Event",
  "Concert / Show",
]);

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const reduce = useReducedMotion();
  const [eventType, setEventType] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const next: Record<string, string> = {};
    const data = new FormData(form);
    if (!String(data.get("name") || "").trim()) next.name = "Please add your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Please add an email so I can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";
    if (!eventType) next.eventType = "Let me know what kind of opportunity this is.";
    if (!String(data.get("message") || "").trim())
      next.message = "A sentence or two about your event helps a lot.";
    if (!String(data.get("phone") || "").trim())
      next.phone = "Please add a phone number.";
    if (!String(data.get("company") || "").trim())
      next.company = "Please add your company or organisation.";
    if (!String(data.get("date") || "").trim())
      next.date = "Please add the event date.";
    if (!String(data.get("location") || "").trim())
      next.location = "Please add a location.";
    if (!String(data.get("duration") || "").trim())
      next.duration = "Please add the performance length.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: bots fill hidden fields; humans don't.
    if ((form.elements.namedItem("company_website") as HTMLInputElement)?.value) {
      setStatus("success"); // silently drop
      return;
    }

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[data-field="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    const data = new FormData(form);
    data.set("eventType", eventType);

    try {
      // No access key configured yet → demo mode: show the success state.
      if (!site.formAccessKey) {
        await new Promise((r) => setTimeout(r, 700));
        setStatus("success");
        return;
      }
      // Web3Forms expects a JSON body for AJAX submissions (its bot filter
      // rejects multipart posts). The access key routes the email to your
      // inbox; subject / from_name make the received message readable.
      const payload: Record<string, string> = {};
      for (const [key, value] of data.entries()) payload[key] = String(value);
      payload.access_key = site.formAccessKey;
      payload.subject = `New booking inquiry: ${eventType}`;
      const fromName = String(data.get("name") || "").trim();
      if (fromName) payload.from_name = fromName;

      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => null);
      setStatus(result?.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl bg-espresso p-10 text-center text-ivory sm:p-16"
      >
        <span className="eyebrow text-brass-soft">Message sent</span>
        <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
          Thank you, I&apos;ll be in touch.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ivory/70">
          Your inquiry has landed. I reply to every message personally, usually
          within a couple of days. In the meantime, feel free to keep exploring.
        </p>
        {!site.formAccessKey && (
          <p className="mx-auto mt-6 max-w-md text-xs italic text-ivory/40">
            Demo mode: no form service is connected yet, so nothing was actually
            sent. Add your Web3Forms access key in{" "}
            <code>src/content/site.ts</code>.
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {/* ── Essentials ─────────────────────────────────────────────── */}
      <fieldset className="space-y-6">
        <legend className="eyebrow mb-2">The essentials</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Name" name="name" required error={errors.name} autoComplete="name" />
          <Field
            label="Email"
            name="email"
            type="email"
            required
            error={errors.email}
            autoComplete="email"
          />
        </div>

        <div>
          <Label required>Type of opportunity</Label>
          <div className="mt-3 flex flex-wrap gap-2" data-field="eventType" tabIndex={-1}>
            {EVENT_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setEventType(type);
                  setErrors((p) => ({ ...p, eventType: "" }));
                }}
                aria-pressed={eventType === type}
                className={cn(
                  "min-h-11 rounded-full border px-4 py-2.5 text-sm transition-all duration-200",
                  eventType === type
                    ? "border-terracotta bg-terracotta text-ivory"
                    : "border-ink/20 text-ink/80 hover:border-ink/50",
                )}
              >
                {type}
              </button>
            ))}
          </div>
          <FieldError message={errors.eventType} />
        </div>

        <Field
          label="Tell me about your event"
          name="message"
          as="textarea"
          required
          error={errors.message}
          placeholder="The occasion, the vibe you're after, anything you'd love me to know…"
        />
      </fieldset>

      {/* ── Details (all optional) ────────────────────────────────── */}
      <fieldset className="space-y-6 border-t border-ink/10 pt-10">
        <legend className="eyebrow mb-2">Event details</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label="Phone"
            name="phone"
            type="tel"
            required
            error={errors.phone}
            autoComplete="tel"
          />
          <Field
            label="Company / organisation"
            name="company"
            required
            error={errors.company}
            autoComplete="organization"
          />
          <Field
            label="Event date"
            name="date"
            type="date"
            required
            error={errors.date}
          />
          <Field
            label="Location"
            name="location"
            required
            error={errors.location}
            placeholder="City, venue or online"
          />
          <Field
            label="Performance length"
            name="duration"
            required
            error={errors.duration}
            placeholder="e.g. 2 × 45 min sets"
          />
          <AnimatePresence initial={false}>
            {GUEST_RELEVANT.has(eventType) && (
              <motion.div
                initial={reduce ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <Field label="Approx. guest count" name="guests" type="number" min={0} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <Label>Budget range</Label>
          <div className="mt-2">
            <Select name="budget">
              <option value="">Prefer not to say</option>
              <option>Still figuring it out</option>
              <option>Under $500</option>
              <option>$500 – $1,500</option>
              <option>$1,500 – $5,000</option>
              <option>$5,000+</option>
            </Select>
          </div>
        </div>
      </fieldset>

      {/* Honeypot, visually hidden, off the tab order */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-base font-medium text-ivory transition-all duration-300 ease-[var(--ease-warm)] hover:-translate-y-0.5 hover:bg-terracotta-bright disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
        {status === "error" && (
          <p className="text-sm text-burgundy">
            Something went wrong sending that. Please email{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            instead.
          </p>
        )}
      </div>
    </form>
  );
}

/* ── Field primitives ─────────────────────────────────────────────── */

const fieldClasses =
  "w-full rounded-xl border border-ink/15 bg-ivory-deep/40 px-4 py-3 text-ink placeholder:text-ink-soft/60 transition-colors duration-200 focus:border-terracotta focus:bg-ivory focus:outline-none";

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
      {children}
      {required && <span className="ml-1 text-terracotta">*</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-burgundy">{message}</p>;
}

function Field({
  label,
  name,
  type = "text",
  as,
  required,
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
  required?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>) {
  const id = `field-${name}`;
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <div className="mt-2">
        {as === "textarea" ? (
          <textarea
            id={id}
            name={name}
            rows={5}
            data-field={name}
            aria-invalid={Boolean(error)}
            className={cn(fieldClasses, "resize-y")}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            data-field={name}
            aria-invalid={Boolean(error)}
            className={fieldClasses}
            {...rest}
          />
        )}
      </div>
      <FieldError message={error} />
    </div>
  );
}

function Select({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <select id={`field-${name}`} name={name} className={fieldClasses}>
      {children}
    </select>
  );
}
