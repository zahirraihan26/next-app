"use client";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-emerald-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to our Newsletter
        </h2>

        <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
          Get the latest updates, new course announcements, and educational tips
          delivered right to your inbox. No spam, we promise!
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full sm:w-96 px-6 py-3 rounded-full bg-zinc-900 text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-zinc-900 font-semibold rounded-full hover:bg-emerald-400 transition shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
