import { Mail, Phone, Camera } from "lucide-react";
import DemoButton from "./DemoButton";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#17120f] px-6 py-20 text-white md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl tracking-[0.35em]">ESSENTIQ</h2>

          <p className="mt-6 max-w-md leading-8 text-white/60">
            Soluções premium de fragrância ambiente para estabelecimentos.
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-light">Vamos conversar.</h3>

          <p className="mt-6 max-w-md leading-8 text-white/70">
            Se pretende criar uma experiência única através da fragrância no seu
            espaço, teremos todo o gosto em apresentar-lhe a solução ideal.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:cruz.agripino.lda@gmail.com"
              className="flex items-center gap-4 text-lg transition hover:text-[#c8a66a]"
            >
              <Mail size={22} />
              <span>cruz.agripino.lda@gmail.com</span>
            </a>

            <a
              href="tel:+351962783456"
              className="flex items-center gap-4 text-lg transition hover:text-[#c8a66a]"
            >
              <Phone size={22} />
              <span>+351 962 783 456</span>
            </a>

            <a
              href="https://www.instagram.com/essentiq_pt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg transition hover:text-[#c8a66a]"
            >
              <Camera size={22} />
              <span>@essentiq_pt</span>
            </a>
          </div>

          <DemoButton />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-8 text-sm text-white/40">
        © 2026 Essentiq. Todos os direitos reservados.
      </div>
    </footer>
  );
}