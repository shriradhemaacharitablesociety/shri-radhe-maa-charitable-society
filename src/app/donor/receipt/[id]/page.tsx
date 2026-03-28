"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface Donation {
  id: string;
  amount: number;
  seva_type: string;
  receipt_no: string;
  status: string;
  payment_id: string | null;
  created_at: string;
  donor_id: string;
}

interface DonorProfile {
  full_name: string;
  email: string;
  phone: string | null;
  pan: string | null;
  address: string | null;
}

export default function DonorReceiptPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();

  const [donation, setDonation] = useState<Donation | null>(null);
  const [donor, setDonor] = useState<DonorProfile | null>(null);
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

      const { data: donationData } = await supabase
        .from("donations")
        .select("*")
        .eq("id", params.id)
        .eq("donor_id", user.id)
        .single();

      if (!donationData) {
        router.push("/donor");
        return;
      }

      const { data: donorData } = await supabase
        .from("donor_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setDonation(donationData);
      setDonor(donorData);
      setLoading(false);
    }

    load();
  }, [params.id, router, supabase]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-warm-400 text-sm animate-pulse">
          Loading receipt...
        </div>
      </div>
    );
  }

  if (!donation || !donor) return null;

  const donationDate = new Date(donation.created_at).toLocaleDateString(
    "en-IN",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  function numberToWords(n: number): string {
    if (n === 0) return "Zero";
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
      "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function convert(num: number): string {
      if (num < 20) return ones[num];
      if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "");
      if (num < 1000) return ones[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " and " + convert(num % 100) : "");
      if (num < 100000) return convert(Math.floor(num / 1000)) + " Thousand" + (num % 1000 ? " " + convert(num % 1000) : "");
      if (num < 10000000) return convert(Math.floor(num / 100000)) + " Lakh" + (num % 100000 ? " " + convert(num % 100000) : "");
      return convert(Math.floor(num / 10000000)) + " Crore" + (num % 10000000 ? " " + convert(num % 10000000) : "");
    }

    return convert(n) + " Rupees Only";
  }

  return (
    <>
      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #receipt-container,
          #receipt-container * {
            visibility: visible;
          }
          #receipt-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-cream">
        {/* ---- Actions bar ---- */}
        <div className="no-print bg-white border-b border-warm-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => router.push("/donor")}
              className="text-sm text-warm-500 hover:text-crimson-600 transition font-medium"
            >
              &larr; Back to Dashboard
            </button>
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 rounded-lg bg-crimson-500 hover:bg-crimson-600 text-white text-sm font-medium transition"
            >
              Print Receipt
            </button>
          </div>
        </div>

        {/* ---- Receipt ---- */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div
            id="receipt-container"
            className="bg-white rounded-2xl shadow-lg shadow-warm-200/30 p-8 sm:p-12"
          >
            {/* Letterhead */}
            <div className="text-center border-b-2 border-crimson-500 pb-6 mb-8">
              <h1 className="font-serif text-2xl sm:text-3xl text-crimson-700 mb-1">
                Shri Radhe Maa Charitable Society
              </h1>
              <p className="text-warm-600 text-sm">
                श्री राधे माँ चैरिटेबल सोसाइटी
              </p>
              <p className="text-warm-500 text-xs mt-2">
                Plot No. 5, Pocket-11, Sector-5, Rohini, Delhi-110085
              </p>
              <p className="text-warm-500 text-xs">
                Reg. No. S/2930/SDM/NW/2017 &middot; PAN: AAUAS1740G
              </p>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-lg font-semibold text-warm-900 uppercase tracking-widest">
                Donation Receipt
              </h2>
            </div>

            {/* Receipt details table */}
            <div className="border border-warm-200 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-warm-100">
                  <DetailRow label="Receipt No." value={donation.receipt_no} />
                  <DetailRow label="Date" value={donationDate} />
                  <DetailRow label="Donor Name" value={donor.full_name} />
                  {donor.pan && (
                    <DetailRow label="Donor PAN" value={donor.pan} />
                  )}
                  {donor.address && (
                    <DetailRow label="Address" value={donor.address} />
                  )}
                  <DetailRow label="Seva / Purpose" value={donation.seva_type} />
                  <DetailRow
                    label="Amount"
                    value={`₹${donation.amount.toLocaleString("en-IN")}`}
                    highlight
                  />
                  <DetailRow
                    label="Amount in Words"
                    value={numberToWords(donation.amount)}
                  />
                  {donation.payment_id && (
                    <DetailRow
                      label="Payment / Transaction ID"
                      value={donation.payment_id}
                    />
                  )}
                  <DetailRow label="Status" value={donation.status} />
                </tbody>
              </table>
            </div>

            {/* 80G Notice */}
            <div className="rounded-xl bg-saffron-50 border border-saffron-200 px-5 py-4 mb-8">
              <p className="text-xs text-warm-700 leading-relaxed">
                <strong>80G Certification:</strong> Shri Radhe Maa Charitable
                Society is registered under Section 80G of the Income Tax Act,
                1961. This receipt is valid for claiming tax deduction under
                Section 80G of the Income Tax Act.
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-4 border-t border-warm-100">
              <div>
                <p className="text-xs text-warm-400">
                  This is a computer-generated receipt and does not require a
                  physical signature.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-warm-700">
                  For Shri Radhe Maa Charitable Society
                </p>
                <p className="text-xs text-warm-400 mt-1">Authorised Signatory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DetailRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <tr className={highlight ? "bg-crimson-50/50" : ""}>
      <td className="px-5 py-3 text-warm-500 font-medium w-2/5">{label}</td>
      <td
        className={`px-5 py-3 ${
          highlight
            ? "text-crimson-700 font-semibold text-lg"
            : "text-warm-900"
        }`}
      >
        {value}
      </td>
    </tr>
  );
}
