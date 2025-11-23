
import React from "react";

const members = [
  { name: "Aluno A", rm: "RM0001", turma: "Turma X", github: "#", linkedin: "#" },
  { name: "Aluno B", rm: "RM0002", turma: "Turma X", github: "#", linkedin: "#" },
];

export default function Members() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-200">Integrantes</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((m) => (
          <article key={m.rm} className="p-4 bg-white/70 dark:bg-gray-800/60 rounded">
            <h3 className="font-bold">{m.name}</h3>
            <p>RM: {m.rm} • Turma: {m.turma}</p>
            <div className="mt-2 space-x-2">
              <a href={m.github} className="underline">GitHub</a>
              <a href={m.linkedin} className="underline">LinkedIn</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
