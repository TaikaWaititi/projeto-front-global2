import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="bg-gradient-to-r from-purple-200 to-purple-100 dark:from-purple-800 dark:to-purple-700 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-800 dark:text-purple-50">CareerMatch</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/about" className="hover:underline">Sobre</Link>
          <Link to="/members" className="hover:underline">Integrantes</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contato</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="px-3 py-1 rounded bg-purple-300 dark:bg-purple-600">Tema: {theme}</button>
        </div>
      </div>
    </header>
  );
}
