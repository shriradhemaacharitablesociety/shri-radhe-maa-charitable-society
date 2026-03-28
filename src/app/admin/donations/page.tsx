"use client";

import { useState } from "react";

type PaymentStatus = "Completed" | "Pending" | "Failed";

interface Donation {
  id: number;
  donor: string;
  amount: number;
  sevaType: string;
  date: string;
  status: PaymentStatus;
}

const donations: Donation[] = [
  { id: 1, donor: "Rajesh Sharma", amount: 51000, sevaType: "Gaushala", date: "2026-03-25", status: "Completed" },
  { id: 2, donor: "Priya Verma", amount: 11000, sevaType: "Healthcare Camp", date: "2026-03-23", status: "Completed" },
  { id: 3, donor: "Amit Gupta", amount: 25000, sevaType: "Disaster Relief", date: "2026-03-20", status: "Pending" },
  { id: 4, donor: "Sunita Devi", amount: 5100, sevaType: "Janseva Bhojan", date: "2026-03-18", status: "Completed" },
  { id: 5, donor: "Vikram Singh", amount: 100000, sevaType: "Financial Aid", date: "2026-03-15", status: "Pending" },
];

const statusColors: Record<PaymentStatus, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

type FilterType = "All" | PaymentStatus;

export default function DonationsPage() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filtered = filter === "All" ? donations : donations.filter((d) => d.status === filter);
  const totalCompleted = donations.filter((d) => d.status === "Completed").reduce((sum, d) => sum + d.amount, 0);
  const totalPending = donations.filter((d) => d.status === "Pending").reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-warm-900">Donation Management</h1>
        <button className="rounded-lg border border-warm-200 px-4 py-2 text-sm font-medium text-warm-700 hover:bg-warm-50">
          Export CSV
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-warm-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-warm-500">Total Donations</p>
          <p className="mt-1 text-2xl font-semibold text-warm-900">
            {(totalCompleted + totalPending).toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
          </p>
        </div>
        <div className="rounded-xl border border-warm-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-warm-500">Completed</p>
          <p className="mt-1 text-2xl font-semibold text-green-700">
            {totalCompleted.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
          </p>
        </div>
        <div className="rounded-xl border border-warm-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-warm-500">Pending</p>
          <p className="mt-1 text-2xl font-semibold text-yellow-700">
            {totalPending.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2">
        {(["All", "Completed", "Pending"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === f
                ? "bg-crimson-500 text-white"
                : "border border-warm-200 text-warm-600 hover:bg-warm-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-warm-100 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-warm-50 text-warm-600">
              <th className="px-5 py-3 font-medium">Donor Name</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Seva Type</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Payment Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id} className="border-b border-warm-100 hover:bg-warm-50">
                <td className="px-5 py-3 text-warm-900">{d.donor}</td>
                <td className="px-5 py-3 text-warm-900">
                  {d.amount.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
                </td>
                <td className="px-5 py-3 text-warm-700">{d.sevaType}</td>
                <td className="px-5 py-3 text-warm-500">{d.date}</td>
                <td className="px-5 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[d.status]}`}>
                    {d.status}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="text-sm font-medium text-crimson-500 hover:text-crimson-700">View</button>
                  <span className="mx-2 text-warm-200">|</span>
                  <button className="text-sm font-medium text-warm-500 hover:text-warm-700">Receipt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
