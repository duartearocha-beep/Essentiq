import Image from "next/image";
import Reveal from "./Reveal";

export default function Machines() {
  return (
    <section className="bg-[#efe2cf] px-6 py-32 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <Reveal>
          <div className="group relative h-[520px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/4ever.jpeg"
              alt="Máquina de fragrância Essentiq"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8a6f50]">
              As nossas máquinas
            </p>

            <h2 className="text-5xl font-light tracking-[-0.04em]">
              Equipamentos discretos, profissionais e sempre acompanhados por nós.
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#5f544b]">
              As máquinas são instaladas pela Essentiq nos estabelecimentos, mas
              continuam a ser propriedade nossa. O cliente usufrui do serviço de
              aromatização, sem necessidade de comprar o equipamento.
            </p>

            <p className="mt-6 text-lg leading-9 text-[#5f544b]">
              Tratamos da instalação, configuração, acompanhamento e manutenção,
              garantindo que o espaço mantém sempre uma fragrância consistente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}