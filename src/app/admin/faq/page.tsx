"use client";

import { faqs } from "@/data/impact";

const categoryStyles: Record<string, string> = {
  donations: "bg-crimson-50 text-crimson-700",
  volunteering: "bg-saffron-100 text-saffron-700",
  programmes: "bg-crimson-50 text-crimson-700",
  general: "bg-saffron-100 text-saffron-700",
};

const categoryLabels: Record<string, string> = {
  donations: "Donations",
  volunteering: "Volunteering",
  programmes: "Programmes",
  general: "General",
};

export default function AdminFAQ() {
  return (
    <>
      {/* Header */}
      <header className="h-16 bg-white border-b border-warm-100 flex items-center justify-between px-4 sm:px-8">
        <h1 className="text-lg font-semibold text-warm-900">FAQ Management</h1>
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
            <h2 className="text-2xl font-semibold text-warm-900">All FAQs</h2>
            <p className="text-warm-500 mt-1">{faqs.length} FAQs total</p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-crimson-500 text-white rounded-lg text-sm font-medium hover:bg-crimson-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add FAQ
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="min-w-[600px] w-full">
              <thead>
                <tr className="bg-warm-50">
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Question
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Category
                  </th>
                  <th className="text-left text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                  <th className="text-right text-xs font-medium text-warm-600 uppercase tracking-wider px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {faqs.map((faq, index) => (
                  <tr
                    key={index}
                    className="border-b border-warm-100 last:border-b-0 hover:bg-warm-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-warm-900">{faq.question}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${categoryStyles[faq.category]}`}
                      >
                        {categoryLabels[faq.category]}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-warm-400 hover:text-warm-700 hover:bg-warm-50 rounded-md transition-colors" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                        <button className="p-1.5 text-warm-400 hover:text-crimson-600 hover:bg-crimson-50 rounded-md transition-colors" title="Delete">
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
        </div>
      </div>
    </>
  );
}
