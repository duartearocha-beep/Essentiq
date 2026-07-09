import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white"
    >
      <Image
        src="/images/evento.jpeg"
        alt="Experiência Essentiq"
        fill
        priority
        className="object-cover animate-[slowZoom_20s_linear_infinite]"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-5xl pt-20">
        <p className="mb-7 animate-[fadeIn_0.8s_ease-out] text-xs uppercase tracking-[0.55em] text-[#d8c09b]">
          Fragrância Ambiente Premium
        </p>

        <h1 className="animate-[fadeIn_1.2s_ease-out] text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-8xl">
          Transformamos espaços
          <br />
          através do aroma.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl animate-[fadeIn_1.6s_ease-out] text-lg leading-8 text-white/80">
          Soluções profissionais de aromatização para bares, discotecas,
          eventos e outros espaços que pretendem criar uma experiência
          memorável para os seus clientes.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#contacto"
            className="animate-[fadeIn_2s_ease-out] rounded-full bg-white px-8 py-4 text-sm uppercase tracking-[0.25em] text-[#17120f] transition-all duration-300 hover:scale-105 hover:bg-[#d8c09b]"
          >
            Pedir demonstração
          </a>
        </div>
      </div>

      <a
        href="#solucoes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-xs uppercase tracking-[0.35em] text-white/70"
      >
        Scroll ↓
      </a>
    </section>
  );
}