"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registrationTypes } from "@/data/event";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
  specialty: string;
  institution: string;
  city: string;
  registrationType: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(data: FormState): Errors {
  const e: Errors = {};
  if (!data.fullName.trim() || data.fullName.trim().length < 3) e.fullName = "Please enter your full name (at least 3 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email address.";
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 8) e.phone = "Please enter a valid phone number (at least 8 digits).";
  if (!data.profession.trim()) e.profession = "Profession is required.";
  if (!data.institution.trim()) e.institution = "Institution / Organization is required.";
  if (!data.city.trim()) e.city = "City is required.";
  if (!data.registrationType) e.registrationType = "Please select a registration type.";
  return e;
}

export default function RegistrationForm() {
  const router = useRouter();
  const [data, setData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    specialty: "",
    institution: "",
    city: "",
    registrationType: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) => setData((d) => ({ ...d, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length) {
      const first = Object.keys(v)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      try {
        localStorage.setItem("gcel_registration", JSON.stringify({ ...data, submittedAt: new Date().toISOString() }));
      } catch {}
      try {
        await fetch("/api/registration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {}
      router.push("/registration/success");
    } catch {
      setSubmitError("Something went wrong. Please try again or contact college.hgel@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = (hasError?: string) =>
    `w-full border px-3 py-2.5 text-[13px] bg-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#023DA5] transition-colors ${
      hasError ? "border-red-300 bg-red-50/30" : "border-[#E2E8F0]"
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {submitError && (
        <div role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-800">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            autoComplete="name"
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            placeholder="Dr. Full Name"
            className={fieldCls(errors.fullName) + " mt-1.5"}
          />
          {errors.fullName && <p className="mt-1.5 text-[11px] text-red-600">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            placeholder="name@hospital.dz"
            className={fieldCls(errors.email) + " mt-1.5"}
          />
          {errors.email && <p className="mt-1.5 text-[11px] text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            placeholder="0540 69 95 13"
            className={fieldCls(errors.phone) + " mt-1.5"}
          />
          {errors.phone && <p className="mt-1.5 text-[11px] text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="registrationType" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            Registration Type <span className="text-red-500">*</span>
          </label>
          <select
            id="registrationType"
            value={data.registrationType}
            onChange={(e) => update("registrationType", e.target.value)}
            aria-invalid={!!errors.registrationType}
            className={fieldCls(errors.registrationType) + " mt-1.5"}
          >
            <option value="">Select type</option>
            {registrationTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.registrationType && <p className="mt-1.5 text-[11px] text-red-600">{errors.registrationType}</p>}
        </div>

        <div>
          <label htmlFor="profession" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            Profession <span className="text-red-500">*</span>
          </label>
          <input
            id="profession"
            value={data.profession}
            onChange={(e) => update("profession", e.target.value)}
            placeholder="e.g., Physician, Resident"
            className={fieldCls(errors.profession) + " mt-1.5"}
          />
          {errors.profession && <p className="mt-1.5 text-[11px] text-red-600">{errors.profession}</p>}
        </div>

        <div>
          <label htmlFor="specialty" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            Specialty
          </label>
          <input
            id="specialty"
            value={data.specialty}
            onChange={(e) => update("specialty", e.target.value)}
            placeholder="e.g., Gastroenterology"
            className={fieldCls(undefined) + " mt-1.5"}
          />
          <p className="mt-1 text-[11px] text-[#64748B]">Optional</p>
        </div>

        <div>
          <label htmlFor="institution" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            Institution / Organization <span className="text-red-500">*</span>
          </label>
          <input
            id="institution"
            value={data.institution}
            onChange={(e) => update("institution", e.target.value)}
            placeholder="Hospital / University / Company"
            className={fieldCls(errors.institution) + " mt-1.5"}
          />
          {errors.institution && <p className="mt-1.5 text-[11px] text-red-600">{errors.institution}</p>}
        </div>

        <div>
          <label htmlFor="city" className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#0F1D3A]">
            City <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            autoComplete="address-level2"
            value={data.city}
            onChange={(e) => update("city", e.target.value)}
            placeholder="Constantine"
            className={fieldCls(errors.city) + " mt-1.5"}
          />
          {errors.city && <p className="mt-1.5 text-[11px] text-red-600">{errors.city}</p>}
        </div>
      </div>

      <div className="border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[11px] leading-5 text-[#475569]">
        By submitting, you confirm your registration request for{" "}
        <span className="font-semibold text-[#0F1D3A]">GCEL 3rd Edition — 01 Oct 2026</span>. The organizing committee will review your
        request. No payment is required at this stage unless communicated directly.
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center bg-[#F08444] px-6 py-3 text-[11px] tracking-[0.08em] uppercase font-bold text-white hover:bg-[#e57333] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 border border-white/40 border-t-white animate-spin" />
            Submitting…
          </span>
        ) : (
          "Submit Registration"
        )}
      </button>

      <p className="text-center text-[11px] text-[#64748B]">
        Questions? <a href="mailto:college.hgel@gmail.com" className="text-[#023DA5] font-medium hover:underline">college.hgel@gmail.com</a> · 0540
        69 95 13
      </p>
    </form>
  );
}
