

const API_BASE = import.meta.env.VITE_API_BASE || "https://api.example.com";

async function request(path: string, opts: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

export const api = {
  getCareers: () => request("/api/careers"),
  getQuestions: () => request("/api/questions"),
  postRecommendations: (payload: any) => request("/api/recommendations", { method: "POST", body: JSON.stringify(payload) }),
};
