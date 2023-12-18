import { ruanPerfil } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={` flex flex-col place-items-center sm:flex-row  lg:w-auto lg:h-[35rem] lg:px-2 lg:mt-14`}
    >
      <div className="flex  lg:justify-center w-[30%] sm:w-[36%] sm:ml-10 lg:w-[35%]">
        <img src={ruanPerfil} alt="garoto" className="flex h-[65%]" />
      </div>
      <div className="flex flex-col justify-end pointer-events-none w-full sm:mt-[3rem]">
        <div className="flex flex-col xs:h-[21.5rem] w-auto sm:h-[10%] lg:h-[60%]  lg:justify-start xs:items-center sm:items-start">
          <h1 className="flex sm:pl-[5rem]  text-gradient h-40rem  font-kristi font-semibold ss:text-[3.5rem] sm:relative text-[40px]  ss:leading-[100.8px]">
            Olá, tudo bem?{" "}
          </h1>
          <h2 className="flex font-kristi text-justify text-white xs:text-[1.2rem] ss:text-[1.3rem] sm:align-top w-auto xs:h-1 sm:h-52 ss:px-20  lg:text-[1.4rem] p-[2rem] md:m-0  lg:w-[50rem]  lg:h-40">
            Sou desenvolvedor front-end, residente de Florianópolis e atualmente
            curso Ciência da Computação e sou graduado em Análise e
            Desenvolvimento de Sistemas. Meu foco é em Node.js, integração e
            SEO, com ótima base em Javascript, Python e PHP, utilizando React e
            Tailwind.
          </h2>
        </div>
        <div className="flex flex-row-reverse right-10 relative h-auto">
          <h1 className="flex  text-white  font-kristi font-semibold text-[1.5rem] ss:mt-10 lg:text-[40px]">
            Ruan Machado{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
