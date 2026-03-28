"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { campaigns } from "@/data/campaigns";

const overviewCards = [
  {
    label: "Total Donations",
    value: "\u20B915,00,000",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    label: "Blog Posts",
    value: String(blogPosts.length),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    color: "text-blue-600 bg-blue-50",
  },
  {
    label: "Active Campaigns",
    value: String(campaigns.filter((c) => c.active).length),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    color: "text-crimson-600 bg-crimson-50",
  },
  {
    label: "Subscribers",
    value: "127",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "text-amber-600 bg-amber-50",
  },
];

const recentActivity = [
  { action: "New donation received", detail: "\u20B925,000 from Anonymous", time: "2 hours ago" },
  { action: "Blog post published", detail: "Free Dialysis Centre Completes 3 Years", time: "1 day ago" },
  { action: "New subscriber", detail: "aniket.sharma@gmail.com", time: "2 days ago" },
  { action: "Campaign milestone", detail: "Flood Relief Fund reached 60%", time: "3 days ago" },
  { action: "Contact form message", detail: "Query about volunteering from Rohini", time: "4 days ago" },
];

export default function AdminDashboard() {
  return (
    <>
      {/* Header */}
      <header className="h-16 bg-white border-b border-warm-100 flex items-center justify-between px-8">
        <h1 className="text-lg font-semibold text-warm-900">Dashboard</h1>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-crimson-100 flex items-center justify-center text-crimson-600 text-sm font-semibold">
            A
          </div>
          <span className="text-sm text-warm-600">Admin</span>
        </div>
      </header>

      {/* Content */}
      <div className="p-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-warm-900">Welcome back</h2>
          <p className="text-warm-500 mt-1">
            Here is what is happening with the society today.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewCards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-warm-100 shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`p-2.5 rounded-lg ${card.color}`}>{card.icon}</span>
              </div>
              <p className="text-3xl font-bold text-warm-900 tracking-tight">{card.value}</p>
              <p className="text-sm text-warm-500 mt-1">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-warm-100">
            <h3 className="text-base font-semibold text-warm-900">Recent Activity</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-warm-50">
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Action
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Detail
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-warm-100 last:border-b-0 hover:bg-warm-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-warm-900">{row.action}</td>
                    <td className="px-6 py-4 text-sm text-warm-600">{row.detail}</td>
                    <td className="px-6 py-4 text-sm text-warm-400">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
          <h3 className="text-base font-semibold text-warm-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/blog"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-crimson-500 text-white rounded-lg text-sm font-medium hover:bg-crimson-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Blog Post
            </Link>
            <Link
              href="/admin/events"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 text-warm-700 rounded-lg text-sm font-medium hover:bg-warm-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Event
            </Link>
            <Link
              href="/admin/messages"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-warm-200 text-warm-700 rounded-lg text-sm font-medium hover:bg-warm-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              View Messages
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
