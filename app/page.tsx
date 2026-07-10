import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ExperienceSection from "@/components/ExperienceSection";
import WhyEssentiq from "@/components/WhyEssentiq";
import Machines from "@/components/Machines";
import HowItWorks from "@/components/HowItWorks";
import Sectors from "@/components/Sectors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f7f3ee] text-[#17120f]">
      <Navbar />
      <Hero />
      <Manifesto />

      <ExperienceSection
        id="experiencias"
        subtitle="Bares"
        title="Ambientes que ficam na memória."
        video="/videos/bar.mp4"
        text="Criamos soluções de aromatização profissional e identidade olfativa para bares que pretendem proporcionar uma experiência mais envolvente e memorável aos seus clientes."
        points={[
          "Ambiente mais sofisticado",
          "Experiência sensorial memorável",
          "Instalação e manutenção incluídas",
        ]}
      />

      <ExperienceSection
        subtitle="Discotecas"
        title="A energia da noite também tem aroma."
        video="/videos/disco.mp4"
        reverse
        text="Através do marketing olfativo, o aroma junta-se à música, à iluminação e ao movimento para reforçar a identidade da discoteca e tornar o espaço mais reconhecível."
        points={[
          "Identidade olfativa do espaço",
          "Aroma consistente durante a noite",
          "Equipamento profissional discreto",
        ]}
      />

      <ExperienceSection
        subtitle="Eventos"
        title="Cada detalhe torna o momento inesquecível."
        video="/videos/evento.mp4"
        text="A aromatização de eventos ajuda a criar uma atmosfera única e reforça a sensação de cuidado, exclusividade e presença em cada ocasião."
        points={[
          "Ideal para eventos privados e corporativos",
          "Solução temporária ou recorrente",
          "Experiência diferenciadora para convidados",
        ]}
      />

      <WhyEssentiq />
      <Machines />
      <HowItWorks />
      <Sectors />
      <Footer />
    </main>
  );
}