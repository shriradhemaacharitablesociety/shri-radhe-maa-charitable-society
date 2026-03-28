"use client";

export default function SettingsPage() {
  const inputClass =
    "w-full rounded-lg border border-warm-200 bg-warm-50 px-4 py-2.5 text-sm text-warm-900 outline-none focus:border-crimson-400 focus:ring-1 focus:ring-crimson-400";
  const labelClass = "block text-sm font-medium text-warm-700 mb-1";
  const cardClass = "rounded-xl border border-warm-100 bg-white p-6 shadow-sm space-y-5";
  const headingClass = "text-lg font-semibold text-warm-900";
  const saveBtn =
    "mt-4 rounded-lg bg-crimson-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-crimson-600 transition";

  return (
    <div className="space-y-8 font-sans p-4 sm:p-8">
      <h1 className="text-2xl font-semibold text-warm-900">Settings</h1>

      {/* Society Details */}
      <section className={cardClass}>
        <h2 className={headingClass}>Society Details</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Society Name</label>
            <input className={inputClass} defaultValue="Shri Radhe Maa Charitable Society" />
          </div>
          <div>
            <label className={labelClass}>Registration No.</label>
            <input className={inputClass} defaultValue="S/2930/SDM/NW/2017" />
          </div>
          <div>
            <label className={labelClass}>PAN</label>
            <input className={inputClass} defaultValue="AAUAS1740G" />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Address</label>
            <input
              className={inputClass}
              defaultValue="Plot No. 5, Pocket-11, Sector-5, Rohini, New Delhi - 110085"
            />
          </div>
        </div>
        <button className={saveBtn}>Save Society Details</button>
      </section>

      {/* Bank Details */}
      <section className={cardClass}>
        <h2 className={headingClass}>Bank Details</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Account Name</label>
            <input className={inputClass} defaultValue="Shri Radhe Maa Charitable Society" />
          </div>
          <div>
            <label className={labelClass}>Account No.</label>
            <input className={inputClass} defaultValue="50100214648162" />
          </div>
          <div>
            <label className={labelClass}>IFSC Code</label>
            <input className={inputClass} defaultValue="HDFC0002072" />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Bank & Branch Address</label>
            <input
              className={inputClass}
              defaultValue="HDFC Bank Ltd., Plot No. F 26/7, Ayodhya Chowk, Sector-7, Rohini, New Delhi"
            />
          </div>
        </div>
        <button className={saveBtn}>Save Bank Details</button>
      </section>

      {/* Contact */}
      <section className={cardClass}>
        <h2 className={headingClass}>Contact Information</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Phone</label>
            <input className={inputClass} defaultValue="9560800343" />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input className={inputClass} defaultValue="shriradhemaacharitablesociety@gmail.com" />
          </div>
        </div>
        <button className={saveBtn}>Save Contact Info</button>
      </section>

      {/* Social Media */}
      <section className={cardClass}>
        <h2 className={headingClass}>Social Media Links</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Instagram</label>
            <input className={inputClass} defaultValue="https://www.instagram.com/shriradhegurumaa" />
          </div>
          <div>
            <label className={labelClass}>Facebook</label>
            <input className={inputClass} defaultValue="https://www.facebook.com/ShriRadheMaa" />
          </div>
          <div>
            <label className={labelClass}>YouTube</label>
            <input className={inputClass} defaultValue="https://www.youtube.com/@ShriRadheGuruMaaJi" />
          </div>
        </div>
        <button className={saveBtn}>Save Social Links</button>
      </section>

      {/* SEO */}
      <section className={cardClass}>
        <h2 className={headingClass}>SEO Settings</h2>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Meta Title</label>
            <input
              className={inputClass}
              defaultValue="Shri Radhe Maa Charitable Society — Seva for Humanity"
            />
          </div>
          <div>
            <label className={labelClass}>Meta Description</label>
            <textarea
              rows={3}
              className={`${inputClass} resize-none`}
              defaultValue="Registered charitable society (S/2930/SDM/NW/2017) founded under the spiritual guidance of Shri Radhe Guru Maa. We serve through Gaushala Seva, Healthcare Camps, Janseva Bhojan, Disaster Relief, and Financial Aid across India."
            />
          </div>
        </div>
        <button className={saveBtn}>Save SEO Settings</button>
      </section>
    </div>
  );
}
