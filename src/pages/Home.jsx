import SobreComponent from '../components/Sobre'

function Home() {
    return (
      <div>
        <div className="h-[800px] flex flex-col center-items justify-center">
          <h2 className="text-lg font-bold text-gray-300 text-center">Bem-vindo ao meu portfólio!</h2>
          <br />
          <h1 className="text-4xl font-bold text-white text-center">
            Desenvolvedor Fullstack | NodeJS | PHP | React
          </h1>
          <p className='mt-2'>
              <span className="text-gray-400 text-center block">
                Aqui você encontrará informações sobre meus projetos, habilidades e experiências. <br /> Role para baixo para saber mais.
              </span>
          </p>
          <div className="mt-5 motion-safe:animate-bounce flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        </div>
        <SobreComponent />
      </div>
    );
  }

export default Home;
  