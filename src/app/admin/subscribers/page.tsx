"use client";

import { useState } from "react";

type SubscriberStatus = "Active" | "Unsubscribed";

interface Subscriber {
  id: number;
  email: string;
  subscribedDate: string;
  status: SubscriberStatus;
}

const initialSubscribers: Subscriber[] = [
  { id: 1, email: "devotee.ram@gmail.com", subscribedDate: "2026-01-15", status: "Active" },
  { id: 2, email: "priya.sharma@outlook.com", subscribedDate: "2026-02-03", status: "Active" },
  { id: 3, email: "suresh.kumar@yahoo.in", subscribedDate: "2026-02-20", status: "Active" },
  { id: 4, email: "neha.gupta@gmail.com", subscribedDate: "2025-12-10", status: "Unsubscribed" },
  { id: 5, email: "mohit.verma@hotmail.com", subscribedDate: "2026-03-01", status: "Active" },
];

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState(initialSubscribers);

  const activeCount = subscribers.filter((s) => s.status === "Active").length;

  const toggleStatus = (id: number) => {
    setSubscribers((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === "Active" ? "Unsubscribed" : "Active" } : s
      )
    );
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-warm-900">Newsletter Subscribers</h1>
        <button className="rounded-lg border border-warm-200 px-4 py-2 text-sm font-medium text-warm-700 hover:bg-warm-50">
          Export CSV
        </button>
      </div>

      {/* Summary Card */}
      <div className="rounded-xl border border-warm-100 bg-white p-5 shadow-sm inline-block">
        <p className="text-sm text-warm-500">Active Subscribers</p>
        <p className="mt-1 text-2xl font-semibold text-warm-900">{activeCount}</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-warm-100 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-warm-50 text-warm-600">
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Subscribed Date</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((s) => (
              <tr key={s.id} className="border-b border-warm-100 hover:bg-warm-50">
                <td className="px-5 py-3 text-warm-900">{s.email}</td>
                <td className="px-5 py-3 text-warm-500">{s.subscribedDate}</td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      s.status === "Active" ? "bg-green-100 text-green-700" : "bg-warm-100 text-warm-500"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button
                    onClick={() => toggleStatus(s.id)}
                    className="text-sm font-medium text-crimson-500 hover:text-crimson-700"
                  >
                    {s.status === "Active" ? "Unsubscribe" : "Resubscribe"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
