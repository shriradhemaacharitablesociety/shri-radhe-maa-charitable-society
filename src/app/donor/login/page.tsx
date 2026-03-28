"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Tab = "login" | "signup";

export default function DonorLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [tab, setTab] = useState<Tab>("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ---- Login state ---- */
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  /* ---- Signup state ---- */
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPan, setSignupPan] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push("/donor");
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const { data, error: authError } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: {
        data: { full_name: signupName },
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    /* Insert into donor_profiles */
    if (data.user) {
      const { error: profileError } = await supabase
        .from("donor_profiles")
        .insert({
          id: data.user.id,
          full_name: signupName,
          email: signupEmail,
          phone: signupPhone || null,
          pan: signupPan || null,
        });

      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }
    }

    setSuccess(
      "Account created! Please check your email to confirm, then log in."
    );
    setLoading(false);
  }

  /* ---- Shared input classes ---- */
  const inputClass =
    "w-full rounded-lg border border-warm-200 bg-warm-50 px-4 py-3 text-warm-900 placeholder:text-warm-400 focus:border-crimson-400 focus:ring-2 focus:ring-crimson-100 outline-none transition";
  const labelClass = "block text-sm font-medium text-warm-700 mb-1.5";

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4 py-12">
      <div className="w-full max-w-md">
        {/* ---- Header ---- */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl text-warm-900 mb-1">
            Donor Portal
          </h1>
          <p className="text-warm-500 text-sm">
            Shri Radhe Maa Charitable Society
          </p>
        </div>

        {/* ---- Card ---- */}
        <div className="bg-white rounded-2xl shadow-lg shadow-warm-200/40 p-8">
          {/* Tab toggle */}
          <div className="flex rounded-lg bg-warm-100 p-1 mb-8">
            {(["login", "signup"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setError("");
                  setSuccess("");
                }}
                className={`flex-1 py-2.5 text-sm font-medium rounded-md transition ${
                  tab === t
                    ? "bg-white text-crimson-600 shadow-sm"
                    : "text-warm-500 hover:text-warm-700"
                }`}
              >
                {t === "login" ? "Login" : "Sign Up"}
              </button>
            ))}
          </div>

          {/* Error / Success */}
          {error && (
            <div className="mb-5 rounded-lg bg-crimson-50 border border-crimson-200 text-crimson-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-5 rounded-lg bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm">
              {success}
            </div>
          )}

          {/* ---- Login Form ---- */}
          {tab === "login" && (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Password</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Your password"
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-crimson-500 hover:bg-crimson-600 text-white font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          )}

          {/* ---- Signup Form ---- */}
          {tab === "signup" && (
            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  type="text"
                  required
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  type="tel"
                  value={signupPhone}
                  onChange={(e) => setSignupPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  PAN <span className="text-warm-400">(optional)</span>
                </label>
                <input
                  type="text"
                  value={signupPan}
                  onChange={(e) => setSignupPan(e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-crimson-500 hover:bg-crimson-600 text-white font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-warm-400 mt-6">
          Reg. No. S/2930/SDM/NW/2017 &middot; PAN AAUAS1740G
        </p>
      </div>
    </div>
  );
}
