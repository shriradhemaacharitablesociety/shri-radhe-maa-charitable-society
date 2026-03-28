"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

const ADMIN_EMAIL = "shriradhemaacharitablesociety@gmail.com";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isAdminEmail = email.toLowerCase().trim() === ADMIN_EMAIL;

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Route based on email
    if (email.toLowerCase().trim() === ADMIN_EMAIL) {
      router.push("/admin");
    } else {
      router.push("/donor");
    }
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (email.toLowerCase().trim() === ADMIN_EMAIL) {
      setError("This email is reserved for admin. Please use a different email.");
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { data, error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Create donor profile
    if (data.user) {
      await supabase.from("donor_profiles").insert({
        id: data.user.id,
        full_name: fullName,
        phone: phone || null,
        pan: pan || null,
      });
    }

    setSuccess("Account created! Please check your email to verify, then log in.");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Shri Radhe Maa Charitable Society"
        width={80}
        height={80}
        className="mb-4 drop-shadow-md"
      />
      <h1
        className="font-devanagari font-bold text-center bg-gradient-to-r from-crimson-600 via-crimson-500 to-saffron-500 bg-clip-text text-transparent mb-1"
        style={{ fontSize: "clamp(1.25rem, 4vw, 1.75rem)" }}
      >
        ॥ श्री राधे माँ चैरिटेबल सोसाइटी ॥
      </h1>
      <p className="text-xs text-warm-500 tracking-widest uppercase mb-8">
        {mode === "login" ? "Welcome Back" : "Create Your Account"}
      </p>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl border border-warm-200 shadow-lg p-6 sm:p-8">
        {/* Tab toggle */}
        <div className="flex bg-warm-50 rounded-lg p-1 mb-6">
          <button
            onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
            className={`flex-1 py-2.5 text-sm font-sans font-medium rounded-md transition-all duration-200 ${
              mode === "login"
                ? "bg-white text-warm-900 shadow-sm"
                : "text-warm-500 hover:text-warm-700"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => { setMode("signup"); setError(""); setSuccess(""); }}
            className={`flex-1 py-2.5 text-sm font-sans font-medium rounded-md transition-all duration-200 ${
              mode === "signup"
                ? "bg-white text-warm-900 shadow-sm"
                : "text-warm-500 hover:text-warm-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Error / Success messages */}
        {error && (
          <div className="mb-4 p-3 bg-crimson-50 border border-crimson-200 rounded-lg text-sm text-crimson-600 font-sans">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-saffron-50 border border-saffron-200 rounded-lg text-sm text-saffron-700 font-sans">
            {success}
          </div>
        )}

        {/* Login Form */}
        {mode === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-sans font-medium text-warm-600 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm font-sans text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-warm-600 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm font-sans text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Admin hint */}
            {isAdminEmail && (
              <p className="text-xs text-crimson-500 font-sans font-medium">
                Admin login detected — you will be redirected to the admin console.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-crimson-500 text-white font-sans font-medium text-sm rounded-lg hover:bg-crimson-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Signing in..." : isAdminEmail ? "Sign In as Admin" : "Sign In"}
            </button>
          </form>
        )}

        {/* Signup Form */}
        {mode === "signup" && !success && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-xs font-sans font-medium text-warm-600 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-crimson-400">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Ramesh Kumar"
                className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm font-sans text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-warm-600 uppercase tracking-wider mb-1.5">
                Email <span className="text-crimson-400">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm font-sans text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:bg-white transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans font-medium text-warm-600 uppercase tracking-wider mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98765 43210"
                  className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm font-sans text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-warm-600 uppercase tracking-wider mb-1.5">
                  PAN (for 80G)
                </label>
                <input
                  type="text"
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm font-sans text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:bg-white transition-colors uppercase"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-sans font-medium text-warm-600 uppercase tracking-wider mb-1.5">
                Password <span className="text-crimson-400">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Min. 6 characters"
                className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm font-sans text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:bg-white transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-crimson-500 text-white font-sans font-medium text-sm rounded-lg hover:bg-crimson-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Creating account..." : "Create Donor Account"}
            </button>
          </form>
        )}

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-warm-500 font-sans">
          By continuing, you agree to our{" "}
          <a href="/en/terms" className="text-crimson-500 hover:underline">Terms</a>{" "}
          &amp;{" "}
          <a href="/en/privacy-policy" className="text-crimson-500 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
