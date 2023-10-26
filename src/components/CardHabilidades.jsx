import { habilidades } from "../constants";
import styles, { layout } from "../style";
import Habilidades from "./Habilidades";

const CardHabilidades = () => (
  <section className="flex flex-col">
    <div
      className="flex flex-col py-15
    "
    >
      <h2
        className={`${styles.heading2} flex flex-col relative pt-10 lg:py-10 `}
      >
        Habilidades
      </h2>
    </div>

    <div className="flex flex-wrap pt-14 lg:py-24 justify-center w-full feedback-container relative z-[1]">
      {habilidades.map((card) => (
        <Habilidades key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default CardHabilidades;
