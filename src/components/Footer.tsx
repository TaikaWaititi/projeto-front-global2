export default function Footer() {
  return (
    <footer className="p-6 mt-12 bg-purple-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} CareerMatch — Site de orientação de carreiras com IA.
      </div>
    </footer>
  );
}
