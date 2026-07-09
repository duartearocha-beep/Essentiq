"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xeebbrrv", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      form.reset();
      setSent(true);
    } else {
      alert("Ocorreu um erro ao enviar. Tenta novamente.");
    }
  }

  function closeModal() {
    setSent(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5">
      <div className="relative w-full max-w-2xl rounded-[2rem] bg-[#f7f3ee] p-8 text-[#17120f] shadow-2xl">
        <button
          onClick={closeModal}
          type="button"
          className="absolute right-6 top-6 rounded-full bg-[#17120f] p-2 text-white transition hover:bg-[#c8a66a] hover:text-[#17120f]"
        >
          <X size={20} />
        </button>

        {sent ? (
          <div className="py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c8a66a] text-[#17120f]">
              <Check size={34} />
            </div>

            <h2 className="mt-8 text-5xl font-light">Obrigado!</h2>

            <p className="mx-auto mt-5 max-w-md leading-8 text-[#6b625a]">
              Recebemos o seu pedido. Entraremos em contacto consigo o mais
              brevemente possível.
            </p>

            <button
              onClick={closeModal}
              type="button"
              className="mt-10 rounded-full bg-[#17120f] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-[#c8a66a] hover:text-[#17120f]"
            >
              Fechar
            </button>
          </div>
        ) : (
          <>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c8a66a]">
              Pedido de contacto
            </p>

            <h2 className="text-5xl font-light">Pedir demonstração</h2>

            <p className="mt-4 leading-8 text-[#6b625a]">
              Preencha os dados e entramos em contacto para avaliar o espaço e
              apresentar a solução Essentiq.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <input
                name="Nome"
                required
                className="rounded-full bg-white px-6 py-4 outline-none"
                placeholder="Nome"
              />

              <input
                name="Empresa"
                className="rounded-full bg-white px-6 py-4 outline-none"
                placeholder="Empresa / Espaço"
              />

              <input
                type="email"
                name="Email"
                required
                className="rounded-full bg-white px-6 py-4 outline-none"
                placeholder="Email"
              />

              <input
                name="Telefone"
                className="rounded-full bg-white px-6 py-4 outline-none"
                placeholder="Telefone"
              />

              <select
                name="Tipo de espaço"
                className="rounded-full bg-white px-6 py-4 outline-none"
              >
                <option>Tipo de espaço</option>
                <option>Bar</option>
                <option>Discoteca</option>
                <option>Evento</option>
                <option>Ginásio</option>
                <option>Restaurante</option>
                <option>Outro</option>
              </select>

              <textarea
                name="Mensagem"
                className="min-h-32 rounded-[1.5rem] bg-white px-6 py-4 outline-none"
                placeholder="Mensagem"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[#17120f] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-[#c8a66a] hover:text-[#17120f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "A enviar..." : "Enviar pedido"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}