import Reveal from "./Reveal";

const sectors = [
  "Hotéis",
  "Clínicas",
  "Ginásios",
  "Lojas",
  "Restaurantes",
  "Escritórios",
];

export default function Sectors() {
  return (
    <section id="setores" className="px-6 py-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8a6f50]">
            Setores
          </p>

          <h2 className="max-w-3xl text-5xl font-light tracking-[-0.04em]">
            Também criamos soluções para outros espaços comerciais.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {sectors.map((sector, index) => (
            <Reveal key={sector} delay={index * 0.1}>
              <div className="rounded-full border border-[#17120f]/15 px-8 py-6 text-center text-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a66a] hover:bg-white hover:shadow-lg">
                {sector}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}