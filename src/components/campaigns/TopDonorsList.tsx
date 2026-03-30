"use client";

import { Trophy } from "lucide-react";

interface Donor {
  id: string;
  name: string;
  amount: number;
  source: "online" | "offline";
  date?: string;
  isAnonymous?: boolean;
}

interface TopDonorsListProps {
  donors: Donor[];
  isHindi?: boolean;
}

export function TopDonorsList({ donors, isHindi = false }: TopDonorsListProps) {
  const topDonors = [...donors]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return (
    <div className="flex rounded-2xl overflow-hidden shadow-md bg-white">
      {/* Crimson sidebar */}
      <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
        <Trophy className="w-5 h-5" aria-hidden="true" />
        <span
          style={{ writingMode: "vertical-lr" }}
          className="font-stat font-bold text-sm uppercase tracking-wider"
        >
          {isHindi ? "दानदाता" : "DONORS"}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 md:p-5">
        <h3 className="font-serif text-lg text-warm-900">
          {isHindi ? "शीर्ष दानदाता" : "Top Donors"}
        </h3>

        <div className="space-y-3 mt-3">
          {topDonors.map((donor, index) => (
            <div key={donor.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-crimson-50 text-crimson-500 text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-warm-900">
                    {donor.isAnonymous
                      ? isHindi
                        ? "गुमनाम दानदाता"
                        : "Anonymous Donor"
                      : donor.name}
                  </p>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-warm-100 text-warm-500">
                    {donor.source}
                  </span>
                </div>
              </div>
              <span className="font-sans text-sm font-semibold text-warm-900">
                {"\u20B9"}{donor.amount.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
