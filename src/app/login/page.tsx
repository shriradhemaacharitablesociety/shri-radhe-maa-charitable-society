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

  async function handleGoogleLogin() {
    setLoading(true);
    setError("");
    const supabase = createClient();

    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    }
  }

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
        {/* Google Sign In — primary option */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-warm-200 rounded-lg text-sm font-sans font-medium text-warm-800 hover:bg-warm-50 hover:border-warm-300 disabled:opacity-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-warm-200" />
          <span className="text-xs text-warm-400 font-sans">or</span>
          <div className="flex-1 h-px bg-warm-200" />
        </div>

        {/* Tab toggle */}
        <div className="flex bg-warm-50 rounded-lg p-1 mb-5">
          <button
            onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
            className={`flex-1 py-2 text-sm font-sans font-medium rounded-md transition-all duration-200 ${
              mode === "login"
                ? "bg-white text-warm-900 shadow-sm"
                : "text-warm-500 hover:text-warm-700"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => { setMode("signup"); setError(""); setSuccess(""); }}
            className={`flex-1 py-2 text-sm font-sans font-medium rounded-md transition-all duration-200 ${
              mode === "signup"
                ? "bg-white text-warm-900 shadow-sm"
                : "text-warm-500 hover:text-warm-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Error / Success */}
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

        <p className="mt-6 text-center text-xs text-warm-500 font-sans">
          By continuing, you agree to our{" "}
          <a href="/en/terms" className="text-crimson-500 hover:underline">Terms</a>
          {" "}&amp;{" "}
          <a href="/en/privacy-policy" className="text-crimson-500 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
