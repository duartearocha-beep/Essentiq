import Reveal from "./Reveal";

const steps = [
  "Analisamos o tipo de estabelecimento e o ambiente pretendido.",
  "Definimos a fragrância e a melhor zona para colocar a máquina.",
  "Instalamos o equipamento sem venda da máquina.",
  "Acompanhamos o funcionamento e a manutenção da solução.",
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-[#17120f] px-6 py-32 text-white md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a96a]">
            Como funciona
          </p>

          <h2 className="max-w-3xl text-5xl font-light tracking-[-0.04em]">
            Simples, discreto e pensado para o teu espaço.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.15}>
              <div className="border-t border-white/20 pt-8">
                <span className="text-sm text-[#c9a96a]">0{index + 1}</span>
                <p className="mt-6 leading-8 text-white/70">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}