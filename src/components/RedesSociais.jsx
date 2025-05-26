export default function RedesSociais() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Minhas Redes Sociais
      </h2>
      <ul className="space-y-4">
        <li>
          <a href="https://github.com/purpesy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-gray-700 hover:text-black hover:scale-105 transition-transform" >
            <span className="text-2xl">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucas-gabriel-5301b2331/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-700 hover:scale-105 transition-transform" >
            <span className="text-2xl">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/5511977134857?text=Ol%C3%A1%2C%20vim%20do%20portfolio!" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-gray-700 hover:text-green-600 hover:scale-105 transition-transform" >
            <span className="text-2xl">WhatsApp</span>
          </a>
        </li>
        <li>
          <a href="mailto:ltrabalho282@gmail.com?subject=Contato%20pelo%20Portfólio" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-gray-700 hover:text-red-600 hover:scale-105 transition-transform" >
            <span className="text-2xl">Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
