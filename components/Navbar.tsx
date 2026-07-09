"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <>
      <nav
        className={clsx(
          "fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 transition-all duration-500 md:px-10",
          dark
            ? "bg-[#f7f3ee]/90 text-[#17120f] shadow-sm backdrop-blur-xl"
            : "bg-transparent text-white"
        )}
      >
        <a href="#top" className="font-serif text-2xl tracking-[0.45em]">
          ESSENTIQ
        </a>

        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] md:flex">
          <a href="#solucoes" className="transition hover:text-[#c8a66a]">
            Soluções
          </a>
          <a href="#como-funciona" className="transition hover:text-[#c8a66a]">
            Como funciona
          </a>
          <a href="#experiencias" className="transition hover:text-[#c8a66a]">
            Experiências
          </a>
          <a href="#contacto" className="transition hover:text-[#c8a66a]">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="hidden rounded-full bg-[#17120f] px-5 py-3 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-[#c8a66a] md:block"
        >
          Proposta
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-xs uppercase tracking-[0.25em] md:hidden"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#f7f3ee] px-6 pt-28 text-[#17120f] md:hidden">
          <div className="flex flex-col gap-8 text-3xl font-light">
            <a onClick={() => setOpen(false)} href="#solucoes">
              Soluções
            </a>
            <a onClick={() => setOpen(false)} href="#como-funciona">
              Como funciona
            </a>
            <a onClick={() => setOpen(false)} href="#experiencias">
              Experiências
            </a>
            <a onClick={() => setOpen(false)} href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      )}
    </>
  );
}