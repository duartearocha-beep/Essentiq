import Reveal from "./Reveal";

type ExperienceSectionProps = {
  id?: string;
  title: string;
  subtitle: string;
  text: string;
  video: string;
  reverse?: boolean;
  points: string[];
};

export default function ExperienceSection({
  id,
  title,
  subtitle,
  text,
  video,
  reverse = false,
  points,
}: ExperienceSectionProps) {
  return (
    <section
      id={id}
      className="bg-[#f7f3ee] px-5 py-16 md:px-16 md:py-28"
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div className="group overflow-hidden rounded-[1.5rem] shadow-2xl">
            <video
              className="h-[320px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 md:h-[560px]"
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c8a66a]">
              {subtitle}
            </p>

            <h2 className="text-4xl font-light leading-tight text-[#17120f] md:text-6xl">
              {title}
            </h2>

            <p className="mt-6 text-base leading-8 text-[#6b625a] md:text-lg md:leading-9">
              {text}
            </p>

            <div className="mt-10 space-y-5">
              {points.map((point, index) => (
                <Reveal key={point} delay={0.2 + index * 0.12}>
                  <div className="flex items-center gap-4 border-b border-[#17120f]/10 pb-5">
                    <span className="text-xl text-[#c8a66a]">✦</span>
                    <p className="text-[#17120f]">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-10 inline-flex rounded-full bg-[#17120f] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#c8a66a] hover:text-[#17120f]"
            >
              Pedir proposta
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}