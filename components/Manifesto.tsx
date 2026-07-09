export default function Manifesto() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#17120f] px-8 text-center text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#c8a66a_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <p className="mb-8 text-xs uppercase tracking-[0.5em] text-[#c8a66a]">
          ESSENTIQ
        </p>

        <h2 className="font-serif text-5xl leading-tight md:text-8xl">
          Há experiências
          <br />
          que começam
          <br />
          antes da primeira palavra.
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-white/70">
          O aroma é invisível.
          <br />
          Mas é muitas vezes aquilo que mais permanece na memória.
        </p>
      </div>
    </section>
  );
}