import { github } from "../assets";
import { projetos } from "../constants";

const Projetos = ({ title, img, icon, link }) => (
  <div className="flex justify-between flex-col lg:px-8 py-5 rounded-[20px]  max-w-[370px]  xs:mb-[5rem] feedback-card">
    <div className="flex pb-5 justify-center">
      <p className=" font-poppins font-normal text-[20px] leading-[32.4px] text-white ">
        {title}
      </p>
    </div>

    <div className="flex flex-col">
      <img
        src={img}
        alt="icon"
        className="w-[20rem] h-[15rem] justify-center rounded"
      />
      <div className="flex flex-row justify-center pt-5 ">
        <img
          src={icon}
          alt="icon"
          className="w-[43px] h-[40px] rounded-full cursor-pointer"
          onClick={() => window.open(`${link}`)}
        />
      </div>
    </div>
  </div>
);

export default Projetos;
