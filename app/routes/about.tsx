import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | House Talk" },
    {
      name: "description",
      content:
        "Learn about HouseTalk, our design approach, and the team behind calm modern interiors.",
    },
  ];
}

const principles = [
  {
    title: "Purposeful Design",
    description:
      "Every layout choice follows how people actually move, gather, and rest at home.",
  },
  {
    title: "Material Honesty",
    description:
      "We prioritize timeless textures and durable pieces that age beautifully in daily life.",
  },
  {
    title: "Calm by Default",
    description:
      "Our palette and spacing system reduce visual noise and create comfort throughout each room.",
  },
];

export default function About() {
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
            <a href="/about" className="text-orange-300">
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
            Talk to Us
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        <section className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm">
          <div className="grid min-h-[500px] lg:grid-cols-[1fr_380px]">
            <div className="bg-[linear-gradient(135deg,#dce3ec_0%,#c4cfdd_52%,#a8b7ca_100%)] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-700">
                About HouseTalk
              </p>
              <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
                We design homes that feel quiet, intentional, and lived in.
              </h1>
              <p className="mt-5 max-w-[58ch] text-sm leading-7 text-slate-700 md:text-base">
                HouseTalk began with a simple idea: modern interiors should be
                beautiful without being difficult. Our team combines practical
                planning, refined materials, and approachable guidance to help
                people create spaces that support everyday life.
              </p>
            </div>

            <div className="flex flex-col justify-between bg-slate-800 p-8 text-slate-100 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Since 2016
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  Built for modern city homes.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  We partner with homeowners to simplify furnishing decisions
                  and shape rooms that are both elegant and genuinely useful.
                </p>
              </div>
              <a
                href="/#collections"
                className="mt-8 inline-flex w-fit rounded-full bg-orange-300 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-orange-200"
              >
                Explore Collections
              </a>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {principle.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
