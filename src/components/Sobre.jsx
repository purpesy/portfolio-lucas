import ImgPerfil from "../assets/img/foto-perfil.jpg";

function SobreComponent() {
  return (
    <div className="flex h-[600px] justify-center my-[50px]">
      <div className="container mx-auto px-4 flex justify-evenly">
        <div className="w-1/4 flex justify-center mt-3">
          <img
            src={ImgPerfil}
            alt="Foto de Perfil"
            className="w-75 h-75 rounded-full"
          />
        </div>
        <div className="flex-column text-white w-1/2">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold">Lucas Gabriel</h2>
            </div>
            <div>
              <a href="#" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                Baixar CV
              </a>
            </div>
          </div>
          <div className="my-3">
            <h2 className="text-3xl">
              Desenvolvedor Fullstack - NodeJS | PHP | ReactJS | MySQL
            </h2>
          </div>
          <div>
            <p className="text-sm text-neutral-300">
              Com experiência na criação de aplicações web completas, minha
              abordagem foca na construção de soluções eficientes, escaláveis e
              de fácil manutenção. No desenvolvimento front-end, priorizo a
              usabilidade e a experiência do usuário, utilizando tecnologias
              modernas como ReactJS e TailwindCSS para criar interfaces
              intuitivas e dinâmicas. No back-end, concentro meus esforços em
              otimizar o desempenho, garantir a segurança e promover a
              escalabilidade das aplicações, trabalhando com ferramentas como
              NodeJS e PHP, além de integrar bancos de dados como MySQL para
              desenvolver sistemas robustos e confiáveis. Ao longo dos meus
              projetos, adoto práticas como o uso do padrão MVC para organizar o
              código e sempre faço uso de controle de versão com GitHub. Também
              realizo testes de funcionalidades com Postman, assegurando a
              qualidade e a estabilidade das minhas aplicações, para entregar
              soluções de alta qualidade que atendem às necessidades dos
              usuários e aos requisitos de negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreComponent;
