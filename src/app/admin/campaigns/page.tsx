"use client";

import Link from "next/link";
import { campaigns } from "@/data/campaigns";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function AdminCampaigns() {
  return (
    <>
      {/* Header */}
      <header className="h-16 bg-white border-b border-warm-100 flex items-center justify-between px-4 sm:px-8">
        <h1 className="text-lg font-semibold text-warm-900">Campaigns</h1>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-crimson-100 flex items-center justify-center text-crimson-600 text-sm font-semibold">
            A
          </div>
          <span className="text-sm text-warm-600">Admin</span>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-warm-900">All Campaigns</h2>
            <p className="text-warm-500 mt-1">{campaigns.length} campaigns total</p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-crimson-500 text-white rounded-lg text-sm font-medium hover:bg-crimson-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Campaign
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="min-w-[700px] w-full">
              <thead>
                <tr className="bg-warm-50">
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Title
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Goal
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Raised
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3 min-w-[180px]">
                    Progress
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Data
                  </th>
                  <th className="text-right text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => {
                  const progress = Math.round((campaign.raised / campaign.goal) * 100);
                  return (
                    <tr
                      key={campaign.id}
                      className="border-b border-warm-100 last:border-b-0 hover:bg-warm-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-warm-900">{campaign.title}</p>
                          <p className="text-xs text-warm-400 mt-0.5">
                            {campaign.sevaType} &middot; {campaign.donorCount} donors
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-warm-600">
                        {formatCurrency(campaign.goal)}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-warm-900">
                        {formatCurrency(campaign.raised)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-warm-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-crimson-500 rounded-full transition-all duration-500"
                              style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-warm-600 w-10 text-right">
                            {progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {campaign.active ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warm-100 text-warm-500">
                            Ended
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {!campaign.active ? (
                          campaign.successStory ? (
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Data Added
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              Pending
                            </span>
                          )
                        ) : (
                          <span className="text-xs text-warm-400">&mdash;</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/campaigns/${campaign.id}`} className="p-1.5 text-warm-400 hover:text-warm-700 hover:bg-warm-50 rounded-md transition-colors" title="Edit">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </Link>
                          <button className="p-1.5 text-warm-400 hover:text-crimson-600 hover:bg-crimson-50 rounded-md transition-colors" title="Delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
