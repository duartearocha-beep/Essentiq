import Reveal from "./Reveal";

export default function WhyEssentiq() {
  const features = [
    {
      number: "01",
      title: "Sem investimento em equipamento",
      description:
        "As máquinas continuam a ser propriedade da Essentiq. O cliente beneficia do serviço sem necessidade de comprar o equipamento.",
    },
    {
      number: "02",
      title: "Instalação profissional",
      description:
        "A nossa equipa trata da instalação, configuração e adaptação da solução ao espaço.",
    },
    {
      number: "03",
      title: "Manutenção incluída",
      description:
        "Acompanhamos o funcionamento dos equipamentos e garantimos a reposição e manutenção sempre que necessário.",
    },
    {
      number: "04",
      title: "Fragrâncias exclusivas",
      description:
        "Selecionamos aromas que ajudam a criar uma identidade própria e uma experiência memorável para os clientes.",
    },
  ];

  return (
    <section
      id="solucoes"
      className="bg-white px-6 py-32 md:px-16"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c8a66a]">
            Porque escolher a Essentiq
          </p>

          <h2 className="max-w-3xl text-5xl font-light">
            Um serviço completo, pensado para empresas que valorizam a experiência
            dos seus clientes.
          </h2>

          <div className="mt-20 space-y-12">
            {features.map((feature, index) => (
              <Reveal key={feature.number} delay={index * 0.15}>
                <div className="flex flex-col gap-6 border-b border-gray-200 pb-10 md:flex-row md:items-start">
                  <span className="w-20 text-5xl font-light text-[#c8a66a]">
                    {feature.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-3xl font-light">
                      {feature.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}