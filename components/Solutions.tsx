const items = [
  {
    title: "Aromatização Profissional",
    text: "Soluções discretas e eficazes para criar uma identidade olfativa no teu espaço.",
  },
  {
    title: "Instalação Incluída",
    text: "Levamos os equipamentos ao estabelecimento e tratamos da colocação inicial.",
  },
  {
    title: "Manutenção Essentiq",
    text: "As máquinas continuam propriedade da Essentiq, com acompanhamento e suporte.",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="px-6 py-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8a6f50]">
          Soluções
        </p>

        <h2 className="max-w-3xl text-5xl font-light tracking-[-0.04em]">
          Uma solução elegante para espaços que querem ser lembrados.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="min-h-[320px] rounded-[2rem] bg-[#eadcc9] p-8 transition hover:scale-[1.02]"
            >
              <h3 className="text-3xl font-light">{item.title}</h3>
              <p className="mt-6 leading-8 text-[#5f544b]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}