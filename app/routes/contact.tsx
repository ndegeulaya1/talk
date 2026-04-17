import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | House Talk" },
    {
      name: "description",
      content:
        "Get in touch with HouseTalk for design consultations and project inquiries.",
    },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="border-b border-slate-700 bg-slate-900 text-slate-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-semibold tracking-wide">
            HouseTalk
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="/" className="transition hover:text-orange-300">
              Home
            </a>
            <a href="/about" className="transition hover:text-orange-300">
              About
            </a>
            <a href="/contact" className="text-orange-300">
              Contact
            </a>
          </nav>
          <a
            href="/about"
            className="rounded-full bg-orange-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-orange-200"
          >
            Learn More
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        <section className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="bg-slate-800 p-8 text-slate-100 md:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Contact HouseTalk
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
                Let us shape your next interior story.
              </h1>
              <p className="mt-5 max-w-[52ch] text-sm leading-7 text-slate-300 md:text-base">
                Share your goals, timeline, and the spaces you want to improve.
                Our team will respond with practical guidance and a clear next
                step.
              </p>

              <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900/60 p-5">
                <p className="text-sm text-slate-300">
                  Email: hello@housetalk.com
                  <br />
                  Phone: +1 (212) 555-0109
                </p>
              </div>
            </div>

            <div className="bg-[linear-gradient(135deg,#dce3ec_0%,#c4cfdd_52%,#a8b7ca_100%)] p-8 md:p-10">
              <form className="rounded-xl border border-white/45 bg-white/40 p-6 backdrop-blur-sm md:p-8">
                <h2 className="text-xl font-semibold text-slate-900">
                  Start the conversation
                </h2>
                <div className="mt-5 grid gap-4">
                  <label className="text-sm text-slate-700">
                    Name
                    <input
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-orange-300 transition focus:ring-2"
                    />
                  </label>
                  <label className="text-sm text-slate-700">
                    Email
                    <input
                      type="email"
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-orange-300 transition focus:ring-2"
                    />
                  </label>
                  <label className="text-sm text-slate-700">
                    Message
                    <textarea
                      rows={4}
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-orange-300 transition focus:ring-2"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
