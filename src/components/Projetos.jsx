import React, { useState } from "react";
import Projeto1 from "../assets/img/dashboard.png";
import Projeto2 from "../assets/img/evolusom.png";
import Projeto3 from "../assets/img/foto-perfil.jpg";

function Projetos() {
  const [modalImg, setModalImg] = useState(null);

  // Função para abrir modal com a imagem clicada
  function abrirModal(img) {
    setModalImg(img);
  }

  // Fechar modal
  function fecharModal() {
    setModalImg(null);
  }

  return (
    <>
      <div className="flex h-[600px] justify-center my-[50px]">
        <div className="flex-col container mx-auto px-4 flex justify-evenly">
          <div>
            <h1 className="text-white text-center font-bold text-4xl">
              Projetos
            </h1>
          </div>
          <div className="flex flex-row justify-evenly items-center">
            {/* projeto1 */}
            <div className="max-w-sm bg-gray-900 shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              <div className="p-6">
                <h2 className="text-2xl text-center font-bold text-white mb-4">
                  Dashboard
                </h2>

                <div className="flex justify-center mb-4">
                  <img
                    src={Projeto1}
                    alt="Projeto"
                    className="w-100 h-50 border-4 border-gray-700 cursor-pointer"
                    onClick={() => abrirModal(Projeto1)}
                  />
                </div>

                <p className="text-gray-300 text-sm text-center mb-4">
                  Este é um breve resumo do projeto. Aqui você descreve o que ele
                  faz e qual problema resolve.
                </p>

                <div className="flex justify-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition duration-200"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>

            {/* projeto2 */}
            <div className="max-w-sm bg-gray-900 shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              <div className="p-6">
                <h2 className="text-2xl text-center font-bold text-white mb-4">
                  Evolusom
                </h2>

                <div className="flex justify-center mb-4">
                  <img
                    src={Projeto2}
                    alt="Projeto"
                    className="w-100 h-50 border-4 border-gray-700 cursor-pointer"
                    onClick={() => abrirModal(Projeto2)}
                  />
                </div>

                <p className="text-gray-300 text-sm text-center mb-4">
                  Este é um breve resumo do projeto. Aqui você descreve o que ele
                  faz e qual problema resolve.
                </p>

                <div className="flex justify-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition duration-200"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>

            {/* projeto3 */}
            <div className="max-w-sm bg-gray-900 shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300">
              <div className="p-6">
                <h2 className="text-2xl text-center font-bold text-white mb-4">
                  Projeto 3
                </h2>

                <div className="flex justify-center mb-4">
                  <img
                    src={Projeto3}
                    alt="Projeto"
                    className="w-100 h-50 border-4 border-gray-700 cursor-pointer"
                    onClick={() => abrirModal(Projeto3)}
                  />
                </div>

                <p className="text-gray-300 text-sm text-center mb-4">
                  Este é um breve resumo do projeto. Aqui você descreve o que ele
                  faz e qual problema resolve.
                </p>

                <div className="flex justify-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition duration-200"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          onClick={fecharModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
        >
          <img
            src={modalImg}
            alt="Imagem expandida"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // para não fechar ao clicar na imagem
          />
          <button
            onClick={fecharModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}

export default Projetos;