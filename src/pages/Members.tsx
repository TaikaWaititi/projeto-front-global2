
import React from "react";

const members = [
  { name: "Bruno Martins Bettio", rm: "RM564939", turma: "Turma 1TDSA", github: "https://github.com/TaikaWaititi", linkedin: "https://www.linkedin.com/in/bruno-martins-bettio/" },
  { name: "Júlia Tiziotto Buttler", rm: "RM564975", turma: "Turma 1TDSA", github: "https://github.com/JuliaTButtler", linkedin: "https://br.linkedin.com/in/shoukita-undefined-155a21367" },
   { name: "Mariana Xavier Quisper", rm: "RM566357", turma: "Turma 1TDSA", github: "https://github.com/Marixavq", linkedin: "https://www.linkedin.com/in/mariana-xavier-quispe-095b81305" },
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
