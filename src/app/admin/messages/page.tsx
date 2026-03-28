"use client";

import { useState } from "react";

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  body: string;
  date: string;
  read: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: "Meera Patel",
    email: "meera.patel@gmail.com",
    subject: "Inquiry about volunteering",
    body: "Namaste, I would like to know how I can volunteer for the upcoming medical camp in Rohini. I am a certified nurse and can contribute my services. Please share the details.",
    date: "2026-03-27",
    read: false,
  },
  {
    id: 2,
    name: "Ravi Shankar",
    email: "ravi.shankar@yahoo.com",
    subject: "Donation receipt request",
    body: "I made a donation of Rs 25,000 last month towards the Gaushala Seva. Could you please send me the 80G receipt for tax filing purposes? My PAN is ABCDE1234F.",
    date: "2026-03-26",
    read: false,
  },
  {
    id: 3,
    name: "Anita Kumari",
    email: "anita.k@outlook.com",
    subject: "CSR partnership discussion",
    body: "We are a mid-size IT company looking to fulfil our CSR obligations. We are interested in partnering with Shri Radhe Maa Charitable Society for healthcare and education initiatives. Please connect.",
    date: "2026-03-24",
    read: true,
  },
  {
    id: 4,
    name: "Deepak Joshi",
    email: "deepak.joshi@hotmail.com",
    subject: "Janseva Bhojan — Location query",
    body: "I have seen your Janseva Bhojan posts on Instagram. Can you tell me the exact location and timings of the next free meal distribution in Delhi NCR?",
    date: "2026-03-22",
    read: true,
  },
  {
    id: 5,
    name: "Kavita Reddy",
    email: "kavita.reddy@gmail.com",
    subject: "Event coverage request",
    body: "I am a journalist with Dainik Jagran. I would like to cover your upcoming annual function. Please share the event schedule and media contact person details.",
    date: "2026-03-20",
    read: true,
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);

  const unreadCount = messages.filter((m) => !m.read).length;

  const markAsRead = (id: number) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  return (
    <div className="space-y-6 font-sans p-4 sm:p-8">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-warm-900">Contact Messages</h1>
        {unreadCount > 0 && (
          <span className="rounded-full bg-crimson-500 px-2.5 py-0.5 text-xs font-medium text-white">
            {unreadCount} unread
          </span>
        )}
      </div>

      {/* Table */}
      <div className="rounded-xl border border-warm-100 bg-white shadow-sm">
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="min-w-[600px] w-full text-left text-sm">
          <thead>
            <tr className="bg-warm-50 text-warm-600">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Subject</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Read</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((m) => (
              <>
                <tr key={m.id} className={`border-b border-warm-100 hover:bg-warm-50 ${!m.read ? "bg-saffron-50" : ""}`}>
                  <td className="px-5 py-3 font-medium text-warm-900">{m.name}</td>
                  <td className="px-5 py-3 text-warm-600">{m.email}</td>
                  <td className="px-5 py-3 text-warm-800">{m.subject}</td>
                  <td className="px-5 py-3 text-warm-500">{m.date}</td>
                  <td className="px-5 py-3">
                    {m.read ? (
                      <span className="inline-block rounded-full bg-warm-100 px-2.5 py-0.5 text-xs text-warm-500">Read</span>
                    ) : (
                      <span className="inline-block rounded-full bg-crimson-100 px-2.5 py-0.5 text-xs font-medium text-crimson-600">
                        Unread
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    {!m.read && (
                      <button onClick={() => markAsRead(m.id)} className="text-sm font-medium text-crimson-500 hover:text-crimson-700">
                        Mark Read
                      </button>
                    )}
                  </td>
                </tr>
                {/* Expandable detail row */}
                <tr key={`${m.id}-detail`} className="border-b border-warm-100">
                  <td colSpan={6} className="px-5 py-0">
                    <details className="group">
                      <summary className="cursor-pointer py-2 text-xs font-medium text-crimson-500 hover:text-crimson-700">
                        View message
                      </summary>
                      <div className="rounded-lg bg-warm-50 p-4 mb-3 text-sm text-warm-700 leading-relaxed">
                        {m.body}
                      </div>
                    </details>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
