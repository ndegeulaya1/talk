import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "House Talk | Modern Living" },
    {
      name: "description",
      content: "Simple modern home page with elegant header and footer.",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="border-b border-slate-700 bg-slate-900 text-slate-100">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-semibold tracking-wide">
            HouseTalk
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#collections" className="transition hover:text-orange-300">
              Collections
            </a>
            <a href="/about" className="transition hover:text-orange-300">
              About
            </a>
            <a href="/contact" className="transition hover:text-orange-300">
              Contact
            </a>
          </nav>
          <a
            href="/contact"
            className="rounded-full bg-orange-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-orange-200"
          >
            Get Started
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        <section className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm">
          <div className="grid min-h-[560px] lg:grid-cols-[360px_1fr]">
            <div className="flex flex-col justify-between bg-slate-800 p-8 md:p-10 text-slate-100">
              <div>
                <p className="mb-7 h-5 rounded-[39px] text-xs uppercase tracking-[0.32em] text-slate-400">
                  Collection
                </p>
                <h1 className="text-3xl font-semibold leading-[1.15] md:text-[2.6rem]">
                  Modern decor curated for serene everyday spaces.
                </h1>
                <p className="mt-6 max-w-[26ch] text-sm leading-7 text-slate-300">
                  A simple home living collection with soft tones, clean
                  geometry, and practical elegance.
                </p>
              </div>
              <a
                href="#collections"
                className="mt-10 inline-flex w-fit rounded-full bg-orange-300 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-orange-200"
              >
                Explore Pieces
              </a>
            </div>

            <div className="relative flex min-h-[340px] items-end bg-[linear-gradient(135deg,#dce3ec_0%,#c4cfdd_52%,#a8b7ca_100%)] p-7 md:p-9">
              <div className="absolute right-12 top-10 hidden h-24 w-24 rounded-full bg-white/30 blur-sm md:block" />
              <div className="absolute bottom-8 right-10 hidden h-16 w-40 rounded-full bg-orange-300/70 blur-sm md:block" />
              <div className="relative w-full rounded-xl border border-white/45 bg-white/25 p-6 backdrop-blur-sm md:p-9">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-700">
                  Signature living room
                </p>
                <h2 className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-slate-900 md:text-4xl">
                  Light textures, quiet color, and timeless comfort.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-700">
                  Inspired by contemporary interiors with balanced form and
                  soft material details.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="mt-10 grid gap-5 md:grid-cols-3">
          {["Living Room Sets", "Accent Chairs", "Lighting Essentials"]
            .reverse()
            .map(
            (item) => (
              <article
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-slate-900">{item}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Curated pieces with simple lines, soft textures, and lasting
                  craftsmanship.
                </p>
              </article>
            ),
          )}
        </section>

        <section
          id="about"
          className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-[1.2fr_1fr] md:p-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              About HouseTalk
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Premium simplicity, designed for real homes.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We blend practical comfort with a calm visual language so each
              room feels intentional and effortless.
            </p>
          </div>
          <div className="rounded-xl bg-slate-100 p-5">
            <p className="text-sm text-slate-600">
              From first inspiration to final styling, our team helps you
              choose pieces that fit your home and your pace of life.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Book a consultation
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-12 bg-slate-950 text-slate-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-10 border-b border-slate-800 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
            <div>
              <a href="/" className="text-lg font-semibold tracking-wide text-white">
                HouseTalk
              </a>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                Premium interior style for modern homes, crafted with calm
                aesthetics and practical comfort.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#collections" className="transition hover:text-orange-300">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition hover:text-orange-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-orange-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                Contact
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                hello@housetalk.com
                <br />
                +1 (212) 555-0109
                <br />
                45 Harmony Avenue, New York, NY 10001
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                Stay Updated
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Receive curated interior insights and product drops in your
                inbox.
              </p>
              <form className="mt-5 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-orange-300 focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-orange-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-orange-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} HouseTalk. All rights reserved.</p>
            <p>Cloudflare message: {loaderData.message}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
