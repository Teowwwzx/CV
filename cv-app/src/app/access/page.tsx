"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AccessForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = useMemo(() => searchParams.get("next") ?? "/", [searchParams]);

  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // .trim() removes outer spaces
    // .toLowerCase() makes it case-insensitive
    // .replace(/\s+/g, ' ') collapses multiple internal spaces into one
    const input = company.trim().toLowerCase().replace(/\s+/g, ' ');
    
    const allowedCompanies = [
      "bybit", 
      "dcconnect", 
      "dcconnectglobal", 
      "dcconnect global", // Added with space for flexibility
      "tapway", 
      "horse year"
    ];

    if (!allowedCompanies.includes(input)) {
      setError('Access denied. Please enter your company name.');
      return;
    }

    const baseCookie = "company_access=bybit; path=/; max-age=2592000; samesite=lax";
    const cookie = window.location.protocol === "https:" ? `${baseCookie}; secure` : baseCookie;
    document.cookie = cookie;
    router.replace(nextPath);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-bold mb-2">Access Required</h1>
        <p className="text-white/70 text-sm mb-6">
          Please enter your company name to continue.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Company</label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. apu"
              autoFocus
            />
          </div>

          {error && <div className="text-sm text-red-300">{error}</div>}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-3 font-semibold"
          >
            Continue
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-[10px] text-white/40 text-center leading-relaxed">
            Note: This is strictly for security and access gating purposes. <br />
            We do not record, store, or share your data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AccessPage() {
  return (
    <Suspense>
      <AccessForm />
    </Suspense>
  );
}
