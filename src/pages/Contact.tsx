
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Mensagem enviada (simulada).");
    setForm({ nome: "", email: "", mensagem: "" });
  }
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-200">Contato</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input value={form.nome} onChange={e=>setForm({...form,nome:e.target.value})} placeholder="Nome" className="w-full p-3 rounded border" />
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-3 rounded border" />
        <textarea value={form.mensagem} onChange={e=>setForm({...form,mensagem:e.target.value})} placeholder="Mensagem" className="w-full p-3 rounded border" rows={6} />
        <button type="submit" className="px-4 py-2 rounded bg-purple-400 text-white">Enviar</button>
      </form>
    </main>
  );
}
