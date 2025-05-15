export default function RedesSociais() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Minhas Redes Sociais
      </h2>
      <ul className="space-y-4">
        <li>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black hover:scale-105 transition-transform"
          >
            <span className="text-lg">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-700 hover:scale-105 transition-transform"
          >
            <span className="text-lg">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/seu-numero"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-green-600 hover:scale-105 transition-transform"
          >
            <span className="text-lg">WhatsApp</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
