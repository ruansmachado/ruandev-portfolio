import { github } from "../assets";
import { projetos } from "../constants";

const Projetos = ({ title, img, icon, link }) => (
  <article className="flex justify-between flex-col lg:px-8 py-5 rounded-[20px]  max-w-[370px]  xs:mb-[5rem] feedback-card">
    <header className="flex pb-5 justify-center">
      <h3 className=" font-poppins font-normal text-[20px] leading-[32.4px] text-white ">
        {title}
      </h3>
    </header>

    <div className="flex flex-col">
      <img
        src={img}
        alt={`Captura de tela do projeto: ${title}`}
        className="w-[20rem] h-[15rem] justify-center rounded"
      />
      <div className="flex flex-row justify-center pt-5">
        <a
          href="link"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-110 transition-transform"
          aria-label={`Visitar repositório do ${title} no GitHub`}
        >
          <img src={icon} alt="" className="w-[43px] h-[40px] rounded-full" />
        </a>
      </div>
    </div>
  </article>
);

export default Projetos;
