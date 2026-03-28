"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface DonorProfile {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  pan: string | null;
  created_at: string;
}

interface Donation {
  id: string;
  amount: number;
  seva_type: string;
  receipt_no: string;
  status: string;
  payment_id: string | null;
  created_at: string;
}

export default function DonorDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState<DonorProfile | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/donor/login");
        return;
      }

      const { data: profileData } = await supabase
        .from("donor_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      const { data: donationData } = await supabase
        .from("donations")
        .select("*")
        .eq("donor_id", user.id)
        .order("created_at", { ascending: false });

      setProfile(profileData);
      setDonations(donationData || []);
      setLoading(false);
    }

    load();
  }, [router, supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/donor/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-warm-400 text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  const totalDonated = donations.reduce((sum, d) => sum + (d.amount || 0), 0);
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : "N/A";

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
          <button
            onClick={handleLogout}
            className="text-sm text-warm-500 hover:text-crimson-600 transition font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* ---- Welcome ---- */}
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl text-warm-900">
            Welcome, {profile?.full_name || "Donor"}
          </h1>
          <p className="text-warm-500 text-sm mt-1">
            Thank you for your generous contributions.
          </p>
        </div>

        {/* ---- Summary Cards ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SummaryCard
            label="Total Donated"
            value={`₹${totalDonated.toLocaleString("en-IN")}`}
          />
          <SummaryCard
            label="Donations"
            value={donations.length.toString()}
          />
          <SummaryCard label="Member Since" value={memberSince} />
        </div>

        {/* ---- Donation History ---- */}
        <section>
          <h2 className="font-serif text-xl text-warm-900 mb-4">
            Donation History
          </h2>
          {donations.length === 0 ? (
            <div className="rounded-2xl bg-cream p-8 text-center text-warm-400 text-sm">
              No donations found yet.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-warm-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-50 text-warm-600 text-left">
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium">Amount</th>
                    <th className="px-4 py-3 font-medium hidden sm:table-cell">
                      Seva Type
                    </th>
                    <th className="px-4 py-3 font-medium hidden md:table-cell">
                      Receipt No.
                    </th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-right">
                      Receipt
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  {donations.map((d) => (
                    <tr key={d.id} className="hover:bg-warm-50/50 transition">
                      <td className="px-4 py-3 text-warm-700">
                        {new Date(d.created_at).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-4 py-3 text-warm-900 font-medium">
                        ₹{d.amount.toLocaleString("en-IN")}
                      </td>
                      <td className="px-4 py-3 text-warm-600 hidden sm:table-cell">
                        {d.seva_type}
                      </td>
                      <td className="px-4 py-3 text-warm-500 hidden md:table-cell font-mono text-xs">
                        {d.receipt_no}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={d.status} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={`/donor/receipt/${d.id}`}
                          className="text-crimson-500 hover:text-crimson-700 font-medium transition text-xs"
                        >
                          Download
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ---- Profile ---- */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl text-warm-900">Your Profile</h2>
            <Link
              href="/donor/profile"
              className="text-sm text-crimson-500 hover:text-crimson-700 font-medium transition"
            >
              Edit Profile
            </Link>
          </div>
          <div className="rounded-2xl border border-warm-100 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileField label="Name" value={profile?.full_name} />
            <ProfileField label="Email" value={profile?.email} />
            <ProfileField label="Phone" value={profile?.phone} />
            <ProfileField label="PAN" value={profile?.pan} />
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---- Helper Components ---- */

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-cream p-6">
      <p className="text-xs text-warm-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="font-stat text-2xl text-warm-900">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const s = status.toLowerCase();
  const colors =
    s === "completed" || s === "success"
      ? "bg-green-50 text-green-700"
      : s === "pending"
        ? "bg-saffron-100 text-saffron-700"
        : "bg-warm-100 text-warm-600";

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${colors}`}
    >
      {status}
    </span>
  );
}

function ProfileField({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div>
      <p className="text-xs text-warm-500 mb-0.5">{label}</p>
      <p className="text-warm-900 text-sm">{value || "—"}</p>
    </div>
  );
}
