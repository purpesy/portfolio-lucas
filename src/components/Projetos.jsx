function Projetos() {
  return (
    <div className="flex h-[600px] justify-center my-[50px]">
      <div className="flex-col container mx-auto px-4 flex justify-evenly">
        <div>
          <h1 className="text-white text-center font-bold text-4xl">
            Projetos
          </h1>
        </div>
        <div className="flex flex-row justify-evenly items-center">
          {/* projeto1 */}
          <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-4">
              <h2 className="text-xl text-center font-semibold text-gray-800 mb-2">
                Nome do Projeto
              </h2>
              <span className="h-48 w-full flex justify-center"></span>
              <p className="text-gray-600 text-sm mb-2">
                Este é um breve resumo do projeto. Aqui você descreve o que ele
                faz e qual problema resolve.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-800 cursor-pointer transition-colors duration-200"
                >
                  Ir para o projeto
                </a>
              </div>
            </div>
          </div>

          {/* projeto2 */}
          <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-4">
              <h2 className="text-xl text-center font-semibold text-gray-800 mb-2">
                Nome do Projeto
              </h2>
              <span className="h-48 w-full flex justify-center"></span>
              <p className="text-gray-600 text-sm mb-2">
                Este é um breve resumo do projeto. Aqui você descreve o que ele
                faz e qual problema resolve.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-800 cursor-pointer transition-colors duration-200"
                >
                  Ir para o projeto
                </a>
              </div>
            </div>
          </div>

          {/* projeto3 */}
          <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-4">
              <h2 className="text-xl text-center font-semibold text-gray-800 mb-2">
                Nome do Projeto
              </h2>
              <span className="h-48 w-full flex justify-center"></span>
              <p className="text-gray-600 text-sm mb-2">
                Este é um breve resumo do projeto. Aqui você descreve o que ele
                faz e qual problema resolve.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-800 cursor-pointer transition-colors duration-200"
                >
                  Ir para o projeto
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projetos;
