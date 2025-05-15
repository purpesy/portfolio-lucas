import RedesSociais from "./RedesSociais";

const Contato = () => {
  return (
    <section className="my-[50px] h-[800px] py-12 flex flex-col justify-center align-center">
      <div className="container flex flex-col mx-auto px-4 grid grid-cols-1">
        <div>
          <h1 className="text-center my-[50px]">
            <span className="text-white text-center font-bold text-4xl">
              Entre em contato!
            </span>
          </h1>
        </div>
        <RedesSociais />
      </div>
    </section>
  );
};

export default Contato;
