
import Form from "./Formulario";
import RedesSociais from "./RedesSociais";

const Contato = () => {
  return (
    <section className="my-[50px] h-[800px] py-12 flex flex-col justify-center align-center">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário */}
        <Form />

        {/* Redes Sociais */}
        <RedesSociais />
      </div>
    </section>
  );
};

export default Contato;
