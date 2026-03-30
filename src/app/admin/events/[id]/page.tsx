"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { events, type EventMedia } from "@/data/events";

export default function EditEventPage() {
  const params = useParams();
  const event = events.find((e) => e.id === params.id);

  const [title, setTitle] = useState(event?.title || "");
  const [titleHi, setTitleHi] = useState(event?.titleHi || "");
  const [type, setType] = useState(event?.type || "");
  const [date, setDate] = useState(event?.date || "");
  const [time, setTime] = useState(event?.time || "");
  const [location, setLocation] = useState(event?.location || "");
  const [address, setAddress] = useState(event?.address || "");
  const [description, setDescription] = useState(event?.description || "");
  const [descriptionHi, setDescriptionHi] = useState(event?.descriptionHi || "");
  const [writeUp, setWriteUp] = useState(event?.writeUp || "");
  const [writeUpHi, setWriteUpHi] = useState(event?.writeUpHi || "");
  const [attendees, setAttendees] = useState(event?.attendees || 0);
  const [media, setMedia] = useState<EventMedia[]>(event?.media || []);

  if (!event) {
    return (
      <div className="p-4 sm:p-8">
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-8 text-center">
          <p className="text-warm-600 text-lg">Event not found</p>
          <Link
            href="/admin/events"
            className="inline-block mt-4 text-sm font-medium text-crimson-500 hover:text-crimson-600"
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const isCompleted = event.status === "completed";
  const isUpcoming = event.status === "upcoming";

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
            href="/admin/events"
            className="p-1.5 text-warm-400 hover:text-warm-700 hover:bg-warm-50 rounded-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <h1 className="text-lg font-semibold text-warm-900">Edit Event: {event.title}</h1>
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
        {/* Event Info Card */}
        <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 className="text-lg font-semibold text-warm-900">Event Info</h2>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${
                isCompleted
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-blue-50 text-blue-700"
              }`}
            >
              {event.status}
            </span>
          </div>

          {isUpcoming ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Title (English)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Title (Hindi)
                </label>
                <input
                  type="text"
                  value={titleHi}
                  onChange={(e) => setTitleHi(e.target.value)}
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Type
                </label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Time
                </label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="e.g. 10:00 AM – 2:00 PM"
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Description (English)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-warm-200 p-3 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent resize-y"
                  placeholder="Describe the event..."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Description (Hindi)
                </label>
                <textarea
                  value={descriptionHi}
                  onChange={(e) => setDescriptionHi(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-warm-200 p-3 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent resize-y"
                  placeholder="कार्यक्रम का वर्णन करें..."
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Title</p>
                <p className="text-sm text-warm-900">{event.title}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Type</p>
                <p className="text-sm text-warm-900">{event.typeLabel}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Date</p>
                <p className="text-sm text-warm-900">{event.date}</p>
              </div>
              {event.time && (
                <div>
                  <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Time</p>
                  <p className="text-sm text-warm-900">{event.time}</p>
                </div>
              )}
              <div>
                <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm text-warm-900">{event.location}</p>
              </div>
              {event.address && (
                <div>
                  <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm text-warm-900">{event.address}</p>
                </div>
              )}
              {event.completedDate && (
                <div>
                  <p className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1">Completed</p>
                  <p className="text-sm text-warm-900">
                    {new Date(event.completedDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Media Section — only for completed events */}
        {isCompleted && (
          <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 className="text-lg font-semibold text-warm-900">Event Media</h2>
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
        )}

        {/* Write-up Section — only for completed events */}
        {isCompleted && (
          <div className="bg-white rounded-xl border border-warm-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-warm-900 mb-4">Event Write-up</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Write-up (English)
                </label>
                <textarea
                  value={writeUp}
                  onChange={(e) => setWriteUp(e.target.value)}
                  rows={5}
                  className="w-full rounded-lg border border-warm-200 p-3 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent resize-y"
                  placeholder="Describe what happened at the event, key outcomes, and impact..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Write-up (Hindi)
                </label>
                <textarea
                  value={writeUpHi}
                  onChange={(e) => setWriteUpHi(e.target.value)}
                  rows={5}
                  className="w-full rounded-lg border border-warm-200 p-3 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent resize-y"
                  placeholder="कार्यक्रम में क्या हुआ, प्रमुख परिणाम और प्रभाव का वर्णन करें..."
                />
              </div>
              <div className="max-w-xs">
                <label className="block text-sm font-medium text-warm-700 mb-1.5">
                  Attendees Count
                </label>
                <input
                  type="number"
                  value={attendees || ""}
                  onChange={(e) => setAttendees(Number(e.target.value))}
                  placeholder="Number of attendees"
                  className="w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

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
