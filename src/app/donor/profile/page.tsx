"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function DonorProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/donor/login");
        return;
      }

      setUserId(user.id);

      const { data } = await supabase
        .from("donor_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        setFullName(data.full_name || "");
        setPhone(data.phone || "");
        setPan(data.pan || "");
        setAddress(data.address || "");
      }

      setLoading(false);
    }

    load();
  }, [router, supabase]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!userId) return;

    setError("");
    setSuccess("");
    setSaving(true);

    const { error: updateError } = await supabase
      .from("donor_profiles")
      .update({
        full_name: fullName,
        phone: phone || null,
        pan: pan || null,
        address: address || null,
      })
      .eq("id", userId);

    if (updateError) {
      setError(updateError.message);
    } else {
      setSuccess("Profile updated successfully.");
    }

    setSaving(false);
  }

  const inputClass =
    "w-full rounded-lg border border-warm-200 bg-warm-50 px-4 py-3 text-warm-900 placeholder:text-warm-400 focus:border-crimson-400 focus:ring-2 focus:ring-crimson-100 outline-none transition";
  const labelClass = "block text-sm font-medium text-warm-700 mb-1.5";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-warm-400 text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ---- Header ---- */}
      <header className="border-b border-warm-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl text-warm-900">SRMCS</span>
            <span className="text-warm-300">|</span>
            <span className="text-sm text-warm-500 font-medium">
              Donor Portal
            </span>
          </div>
          <Link
            href="/donor"
            className="text-sm text-warm-500 hover:text-crimson-600 transition font-medium"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="font-serif text-2xl text-warm-900 mb-6">
          Edit Profile
        </h1>

        <div className="bg-white rounded-2xl border border-warm-100 p-6 sm:p-8">
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

          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={pan}
                onChange={(e) => setPan(e.target.value.toUpperCase())}
                placeholder="ABCDE1234F"
                maxLength={10}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                placeholder="Your postal address"
                className={inputClass + " resize-none"}
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-3 rounded-lg bg-crimson-500 hover:bg-crimson-600 text-white font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <Link
                href="/donor"
                className="text-sm text-warm-500 hover:text-warm-700 transition"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
