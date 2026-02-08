import React from "react";

const ContactsForm = () => {
  return (
    <section className="w-full px-4 py-12 md:py-20 flex flex-col items-center gap-10">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center">
        Contact Us (Before It&apos;s Too Late)
      </h1>

      <div className="bg-[#FCECD9] w-full max-w-6xl rounded-xl p-4 sm:p-6 md:p-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-4">
          Get in Touch
        </h2>

        <div className="w-full h-0.5 bg-[#e3d4c3] mb-8" />

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-semibold uppercase">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Legal Name (Soon Needed)*"
              className="w-full rounded-lg bg-[#FFF7ED] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold uppercase">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number*"
              className="w-full rounded-lg bg-[#FFF7ED] px-4 py-3 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold uppercase">
              Email
            </label>
            <input
              type="email"
              placeholder="For Warranty Claims (lol)*"
              className="w-full rounded-lg bg-[#FFF7ED] px-4 py-3 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold uppercase">
              Your Message
            </label>
            <textarea
              rows={5}
              placeholder="Confess your regret here…"
              className="w-full rounded-lg bg-[#FFF7ED] px-4 py-3 outline-none resize-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-center pt-4">
            <button
              type="submit"
              className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg
                         hover:bg-orange-500 transition-colors"
            >
              Submit Regret
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactsForm;
