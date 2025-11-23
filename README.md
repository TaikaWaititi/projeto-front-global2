
# CareerMatch (frontend)

Scaffold added on top of the provided Vite + TS + Tailwind boilerplate.

**What I added**
- Pages: Home, About, Members, FAQ, Contact
- Theme context (light/dark) implemented via `ThemeContext` (uses `data-theme` on document element)
- Tailwind theme customization with pastel purple palette (see `tailwind.config.cjs`)
- TypeScript interfaces mapping to backend Java classes (see `src/types/backend.ts`). Refer to uploaded Java classes doc. fileciteturn0file0
- Minimal API client with placeholder base URL -- update `VITE_API_BASE` when backend is deployed. Backend integration requirements are described in the Global Solution PDF. fileciteturn0file1

**Where to find the original uploaded files**
- Java classes doc: /mnt/data/Classes Java oficial.docx
- Project brief (Global Solution): /mnt/data/1TDS Fevereiro - Global Solution 2025-2.pdf

**Next steps (suggested)**
1. Update `VITE_API_BASE` in `.env` to point to your deployed Java API.
2. Implement the quiz flow (routes `/quiz`, components to fetch questions and post answers to `/api/recommendations`).
3. Fill `Members` page with real team data (RM, photo, GitHub, LinkedIn) as required by the assignment.
4. Ensure at least 5 commits per student and push to GitHub; deploy to Vercel.

