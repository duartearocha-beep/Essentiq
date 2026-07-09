"use client";

import { useState } from "react";
import DemoModal from "./DemoModal";

export default function DemoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-10 inline-flex rounded-full bg-[#c8a66a] px-8 py-4 text-sm uppercase tracking-[0.25em] text-[#17120f] transition-all duration-300 hover:bg-white"
      >
        Pedir uma demonstração
      </button>

      <DemoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}