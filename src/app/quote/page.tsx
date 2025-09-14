'use client'
import { useForm, ValidationError } from "@formspree/react";

export default function Quote() {
  const [state, handleSubmit] = useForm("movlzoyg");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-blue-900 text-2xl font-bold text-center max-w-md">
          ✅ Thanks for reaching out! <br /> 
          We’ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-2">
          Contact Us Today
        </h1>
        <p className="text-center text-blue-800 mb-8 font-medium">
          Fast, reliable, and transparent pricing — no hidden fees.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-blue-900">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="JohnDoe@gmail.com"
              className="w-full bg-gray-100 rounded-xl p-3 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-lg font-semibold mb-2 text-blue-900">
              Select a Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-gray-100 rounded-xl p-3 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="">-- Select a Service --</option>
              <option value="faucet">Faucet Replacement / Installation</option>
              <option value="toilet">Toilet Replacement / Installation</option>
              <option value="ceiling-fan">Ceiling Fan Replacement / Installation</option>
              <option value="light-fixture">Light Fixture Replacement / Installation</option>
              <option value="garbage-disposal">Garbage Disposal Installation</option>
              <option value="showerhead">Showerhead Replacement</option>
              <option value="door-lock">Door Handle / Lock Replacement</option>
              <option value="tv-mounting">TV Mounting</option>
              <option value="shelving">Shelving Installation</option>
              <option value="furniture-assembly">Furniture Assembly</option>
              <option value="caulking">Caulking & Sealing (Bath / Kitchen)</option>
              <option value="other">Other (Custom Request)</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2 text-blue-900">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              className="w-full bg-gray-100 rounded-xl p-3 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none h-32"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-900 text-white font-bold rounded-xl py-3 hover:bg-blue-950 transition disabled:opacity-60"
          >
            Contact Us Today
          </button>
        </form>

        {/* Trust Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          ⏱️ Expect a response within 24 hours. Your information is kept private.
        </p>
      </div>
    </section>
  );
}