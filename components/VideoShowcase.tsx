export default function VideoShowcase() {
  return (
    <section className="bg-[#17120f] px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c8a66a]">
            Experiência Essentiq
          </p>

          <h2 className="text-5xl font-light text-white md:text-6xl">
            Um aroma discreto. Uma presença impossível de ignorar.
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem]">
          <video
            className="h-[70vh] w-full object-cover"
            src="/videos/proximo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}