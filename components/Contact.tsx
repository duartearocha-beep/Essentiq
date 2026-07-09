export default function Contact() {
  return (
    <section id="contacto" className="bg-[#17120f] px-6 py-32 text-white md:px-16">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a96a]">
            Contacto
          </p>

          <h2 className="text-5xl font-light tracking-[-0.04em]">
            Queres transformar o aroma do teu espaço?
          </h2>

          <div className="mt-10 space-y-3 text-white/80">
            <p>
              <strong>Email:</strong> cruz.agripino.lda@gmail.com
            </p>

            <p>
              <strong>Telefone:</strong> +351 962 783 456
            </p>
          </div>

          <p className="mt-8 text-lg leading-9 text-white/65">
            Preenche o formulário e entramos em contacto para perceber o teu
            estabelecimento e preparar uma proposta.
          </p>
        </div>

        <form className="rounded-[2rem] bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-5">
            <input className="rounded-full bg-white px-6 py-4 text-[#17120f] outline-none" placeholder="Nome" />
            <input className="rounded-full bg-white px-6 py-4 text-[#17120f] outline-none" placeholder="Email" />
            <input className="rounded-full bg-white px-6 py-4 text-[#17120f] outline-none" placeholder="Telemóvel" />
            <input className="rounded-full bg-white px-6 py-4 text-[#17120f] outline-none" placeholder="Nome do estabelecimento" />

            <select className="rounded-full bg-white px-6 py-4 text-[#17120f] outline-none">
              <option>Tipo de espaço</option>
              <option>Hotel</option>
              <option>Clínica</option>
              <option>Ginásio</option>
              <option>Loja</option>
              <option>Restaurante</option>
              <option>Escritório</option>
              <option>Outro</option>
            </select>

            <textarea
              className="min-h-36 rounded-[1.5rem] bg-white px-6 py-4 text-[#17120f] outline-none"
              placeholder="Mensagem"
            />

            <button
              type="button"
              className="rounded-full bg-[#c9a96a] px-8 py-4 text-sm uppercase tracking-[0.25em] text-[#17120f] transition hover:bg-white"
            >
              Enviar pedido
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}