import type { Route } from "./+types/collections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Collections | House Talk" },
    {
      name: "description",
      content:
        "Browse HouseTalk living room sets, accent chairs, and lighting—curated for calm, modern homes.",
    },
  ];
}

const collections = [
  {
    title: "Living Room Sets",
    description:
      "Coordinated seating, tables, and storage chosen to read as one quiet composition. Each set balances proportion, traffic flow, and soft contrast so the room feels open and grounded.",
    highlights: ["Modular layouts", "Durable upholstery", "Cohesive palettes"],
  },
  {
    title: "Accent Chairs",
    description:
      "Statement silhouettes and tactile fabrics that add personality without overpowering the space. Ideal for reading corners, conversation pairs, or a single sculptural anchor.",
    highlights: ["Ergonomic sit", "Textile variety", "Compact footprints"],
  },
  {
    title: "Lighting Essentials",
    description:
      "Layered illumination with warm dimmable sources—pendants, floor lamps, and table lights that sculpt mood and reduce harsh glare during evenings at home.",
    highlights: ["Warm LED options", "Dimmer-friendly", "Scale guides"],
  },
];

export default function Collections() {
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
            <a href="/collections" className="text-orange-300">
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
            Talk to Us
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        <section className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm">
          <div className="grid min-h-[420px] lg:grid-cols-[1fr_340px]">
            <div className="bg-[linear-gradient(135deg,#dce3ec_0%,#c4cfdd_52%,#a8b7ca_100%)] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-700">
                HouseTalk collections
              </p>
              <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Curated decor for serene, everyday rooms.
              </h1>
              <p className="mt-5 max-w-[58ch] text-sm leading-7 text-slate-700 md:text-base">
                Explore groupings we refine for real homes: balanced layouts,
                tactile materials, and lighting that flatters night and day. Each
                line is built to mix calmly with what you already love.
              </p>
            </div>

            <div className="flex flex-col justify-between bg-slate-800 p-8 text-slate-100 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  How we curate
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  Simple lines, soft textures, lasting craft.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  We favor pieces that age well, scale across apartments and
                  houses, and stay easy to live with as routines change.
                </p>
              </div>
              <a
                href="/contact"
                className="mt-8 inline-flex w-fit rounded-full bg-orange-300 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-orange-200"
              >
                Request a consult
              </a>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {collections.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
              <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
