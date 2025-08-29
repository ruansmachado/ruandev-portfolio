import { animation } from "../style";

const Habilidades = ({ title, icon }) => (
  <article
    className={`flex flex-col mb-10 lg:px-8 py-6 lg:py-10 rounded-[10px] w-[8rem] lg:w-[10rem]  max-w-[370px] md:mr-10 mr-5 lg:mr-15 feedback-card ${animation.jumpIn}`}
  >
    <header className="flex pb-1 justify-center">
      <h3 className=" font-poppins font-normal text-[1rem] text-white ">
        {title}
      </h3>
    </header>

    <div className="flex flex-col">
      <div className="flex flex-row justify-center pt-5 mb-2">
        <img src={icon} alt="" className="w-[63px] h-[60px] " />
      </div>
    </div>
  </article>
);

export default Habilidades;
