"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { campaigns, type CampaignDonor, type CampaignMedia } from "@/data/campaigns";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function EditCampaignPage() {
  const params = useParams();
  const campaign = campaigns.find((c) => c.id === params.id);

  const [successStory, setSuccessStory] = useState(campaign?.successStory || "");
  const [successStoryHi, setSuccessStoryHi] = useState(campaign?.successStoryHi || "");
  const [media, setMedia] = useState<CampaignMedia[]>(campaign?.media || []);
  const [donors, setDonors] = useState<(CampaignDonor & { isNew?: boolean })[]>(
    campaign?.topDonors || []
  );

  if (!campaign) {
    return (
      <div className="p-4 sm:p-8">
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-8 text-center">
          <p className="text-warm-600 text-lg">Campaign not found</p>
          <Link
            href="/admin/campaigns"
            className="inline-block mt-4 text-sm font-medium text-crimson-500 hover:text-crimson-600"
          >
            Back to Campaigns
          </Link>
        </div>
      </div>
    );
  }

  const progress = Math.round((campaign.raised / campaign.goal) * 100);

  function handleAddDonor() {
    setDonors((prev) => [
      ...prev,
      {
        id: `new-${Date.now()}`,
        name: "",
        amount: 0,
        source: "online",
        isAnonymous: false,
        isNew: true,
      },
    ]);
  }

  function handleUpdateDonor(id: string, field: string, value: string | number | boolean) {
    setDonors((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  }

  function handleDeleteDonor(id: string) {
    setDonors((prev) => prev.filter((d) => d.id !== id));
  }

  function handleDeleteMedia(id: string) {
    setMedia((prev) => prev.filter((m) => m.id !== id));
  }

  function handleUpdateMediaCaption(id: string, caption: string) {
    setMedia((prev) =>
      prev.map((m) => (m.id === id ? { ...m, caption } : m))
    );
  }

  function handleSave() {
    alert("Changes saved successfully!");
  }

  return (
    <>
      {/* Header */}
      <header className="h-16 bg-white border-b border-warm-100 flex items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/campaigns"
            className="p-1.5 text-warm-400 hover:text-warm-700 hover:bg-warm-50 rounded-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <h1 className="text-lg font-semibold text-warm-900">Edit Campaign: {campaign.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-crimson-100 flex items-center justify-center text-crimson-600 text-sm font-semibold">
            A
          </div>
          <span className="text-sm text-warm-600">Admin</span>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-8 space-y-8">
        {/* Campaign Info Card (read-only) */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-warm-900 mb-4">Campaign Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Title</p>
              <p className="text-sm text-warm-900">{campaign.title}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Seva Type</p>
              <p className="text-sm text-warm-900">{campaign.sevaType}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Status</p>
              {campaign.active ? (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                  Active
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warm-100 text-warm-500">
                  Ended
                </span>
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Goal</p>
              <p className="text-sm text-warm-900">{formatCurrency(campaign.goal)}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Raised</p>
              <p className="text-sm font-medium text-warm-900">{formatCurrency(campaign.raised)} ({progress}%)</p>
            </div>
            <div>
              <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Date Range</p>
              <p className="text-sm text-warm-900">
                {campaign.completedDate
                  ? `Ended ${campaign.completedDate}`
                  : `Ends ${campaign.endDate}`}
              </p>
            </div>
          </div>
        </div>

        {/* Success Story Section */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-warm-900 mb-4">Success Story</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1.5">
                Success Story (English)
              </label>
              <textarea
                value={successStory}
                onChange={(e) => setSuccessStory(e.target.value)}
                rows={5}
                className="w-full rounded-lg border border-warm-200 p-3 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent resize-y"
                placeholder="Describe the campaign's impact and outcomes..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1.5">
                Success Story (Hindi)
              </label>
              <textarea
                value={successStoryHi}
                onChange={(e) => setSuccessStoryHi(e.target.value)}
                rows={5}
                className="w-full rounded-lg border border-warm-200 p-3 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent resize-y"
                placeholder="अभियान के प्रभाव और परिणामों का वर्णन करें..."
              />
            </div>
          </div>
        </div>

        {/* Media Gallery Section */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="text-lg font-semibold text-warm-900">Campaign Media</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert("Upload functionality requires Supabase Storage integration")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-crimson-500 text-white rounded-lg text-sm font-medium hover:bg-crimson-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                Upload Photo
              </button>
              <button
                onClick={() => alert("Upload functionality requires Supabase Storage integration")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-crimson-500 text-white rounded-lg text-sm font-medium hover:bg-crimson-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                Upload Video
              </button>
            </div>
          </div>

          {media.length === 0 ? (
            <div className="flex items-center justify-center h-32 bg-warm-50 rounded-lg border border-dashed border-warm-200">
              <p className="text-sm text-warm-400">No media uploaded yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {media.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="aspect-4/3 bg-warm-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {item.type === "video" ? (
                      <svg className="h-10 w-10 text-warm-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                    ) : (
                      <svg className="h-10 w-10 text-warm-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                    )}
                    <button
                      onClick={() => handleDeleteMedia(item.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={item.caption || ""}
                    onChange={(e) => handleUpdateMediaCaption(item.id, e.target.value)}
                    placeholder="Caption..."
                    className="mt-2 w-full rounded-lg border border-warm-200 px-3 py-2 text-xs text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top Donors Section */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="text-lg font-semibold text-warm-900">Top Donors</h2>
            <button
              onClick={handleAddDonor}
              className="inline-flex items-center gap-2 px-4 py-2 bg-crimson-500 text-white rounded-lg text-sm font-medium hover:bg-crimson-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Donor
            </button>
          </div>

          {donors.length === 0 ? (
            <div className="flex items-center justify-center h-32 bg-warm-50 rounded-lg border border-dashed border-warm-200">
              <p className="text-sm text-warm-400">No donors added yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="min-w-[600px] w-full">
                <thead>
                  <tr className="bg-warm-50">
                    <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-4 py-3 w-12">
                      #
                    </th>
                    <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-4 py-3">
                      Name
                    </th>
                    <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-4 py-3">
                      Amount
                    </th>
                    <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-4 py-3">
                      Source
                    </th>
                    <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-4 py-3">
                      Anonymous
                    </th>
                    <th className="text-right text-xs font-medium text-warm-600 uppercase tracking-wider px-4 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map((donor, index) => (
                    <tr
                      key={donor.id}
                      className="border-b border-warm-100 last:border-b-0 hover:bg-warm-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-warm-600">{index + 1}</td>
                      <td className="px-4 py-3">
                        {donor.isNew ? (
                          <input
                            type="text"
                            value={donor.name}
                            onChange={(e) => handleUpdateDonor(donor.id, "name", e.target.value)}
                            placeholder="Donor name"
                            className="w-full rounded-lg border border-warm-200 px-3 py-1.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                          />
                        ) : (
                          <span className="text-sm text-warm-900">{donor.isAnonymous ? "Anonymous" : donor.name}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {donor.isNew ? (
                          <input
                            type="number"
                            value={donor.amount || ""}
                            onChange={(e) => handleUpdateDonor(donor.id, "amount", Number(e.target.value))}
                            placeholder="Amount"
                            className="w-24 rounded-lg border border-warm-200 px-3 py-1.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                          />
                        ) : (
                          <span className="text-sm text-warm-900">{formatCurrency(donor.amount)}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {donor.isNew ? (
                          <select
                            value={donor.source}
                            onChange={(e) => handleUpdateDonor(donor.id, "source", e.target.value)}
                            className="rounded-lg border border-warm-200 px-3 py-1.5 text-sm text-warm-900 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                          >
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                          </select>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-warm-50 text-warm-700 capitalize">
                            {donor.source}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {donor.isNew ? (
                          <input
                            type="checkbox"
                            checked={donor.isAnonymous || false}
                            onChange={(e) => handleUpdateDonor(donor.id, "isAnonymous", e.target.checked)}
                            className="w-4 h-4 rounded border-warm-300 text-crimson-500 focus:ring-crimson-500"
                          />
                        ) : (
                          <span className="text-sm text-warm-600">{donor.isAnonymous ? "Yes" : "No"}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {!donor.isNew && (
                            <button
                              onClick={() =>
                                setDonors((prev) =>
                                  prev.map((d) =>
                                    d.id === donor.id ? { ...d, isNew: true } : d
                                  )
                                )
                              }
                              className="p-1.5 text-warm-400 hover:text-warm-700 hover:bg-warm-50 rounded-md transition-colors"
                              title="Edit"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                              </svg>
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteDonor(donor.id)}
                            className="p-1.5 text-warm-400 hover:text-crimson-600 hover:bg-crimson-50 rounded-md transition-colors"
                            title="Delete"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-3 bg-crimson-500 text-white rounded-lg text-sm font-medium hover:bg-crimson-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
