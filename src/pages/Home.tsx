
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-lg shadow">
        <h1 className="text-4xl font-extrabold text-purple-700 dark:text-purple-200">Descubra carreiras que combinam com você</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Responda um teste rápido de habilidades e preferências. Nossa IA analisa seu perfil e recomenda carreiras e cursos de apoio.
        </p>
        <div className="mt-6">
          <Link to="/quiz" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-400 to-purple-300 text-white font-semibold">Começar teste</Link>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-purple-50 dark:bg-purple-900/40 rounded">
          <h3 className="font-bold">Como funciona</h3>
          <ol className="list-decimal list-inside mt-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Responda perguntas sobre habilidades e preferências.</li>
            <li>A IA cria um perfil e faz recomendações de carreiras.</li>
            <li>Receba cursos sugeridos para se qualificar.</li>
          </ol>
        </div>
        <div className="p-6 bg-purple-50 dark:bg-purple-900/40 rounded">
          <h3 className="font-bold">Por que usar</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Planejamento de carreira acessível, com recomendações personalizadas e foco em desenvolvimento prático.</p>
        </div>
      </section>
    </main>
  );
}
