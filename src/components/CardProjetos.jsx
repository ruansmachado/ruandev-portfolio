import { projetos } from "../constants";
import styles, { layout } from "../style";
import Projetos from "./Projetos";

const CardProjetos = () => (
  <section className="flex flex-col xs:my-[5rem] sm:my-[10rem] ">
    <div
      className="flex flex-col pt-5
    "
    >
      <h2 className={`${styles.heading2} flex flex-col relative pt-10 mb-10`}>
        Projetos
      </h2>
    </div>

    <div className="flex flex-wrap justify-center w-auto feedback-container relative z-[1] rounded-md ss:space-x-2 sm:space-x-5 xl:space-x-20">
      {projetos.map((card) => (
        <Projetos key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default CardProjetos;
