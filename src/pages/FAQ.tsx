
import React from "react";

export default function FAQ() {
  const faqs = [
    { q: "Como funciona o teste?", a: "Você responde perguntas sobre interesses e habilidades; a IA analisa e recomenda carreiras." },
    { q: "A IA substitui orientação humana?", a: "Não. A IA sugere caminhos; orientação humana é recomendada para decisões finais." },
  ];
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-200">Perguntas Frequentes</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 bg-white/70 dark:bg-gray-800/60 rounded">
            <summary className="font-semibold">{f.q}</summary>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{f.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
