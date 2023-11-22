import styles from "../style";
import Button from "./Button";
import { curriculo, github, linkedin, email } from "../assets";

const Contato = () => (
  <section
    className={`h-5rem mx-10 xs:mt-[5rem] ss:mt-[15rem] xs:justify-center`}
  >
    <div
      className={`relative ${styles.flexCenter} ${styles.boxWidth} ${styles.marginY} ${styles.padding} md:hidden h-[17rem] sm:flex-row flex-col  rounded-[20px] shadow-2xl bg-[#181e34]`}
    >
      <div
        className={`${styles.flexCenter}  flex-col sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <img
          src={curriculo}
          alt="icon"
          className={`w-[14rem] h-[20rem] justify-center rounded absolute -top-40 py-2`}
        />
        <Button />
      </div>
    </div>
    <div
      className={`relative ${styles.flexCenter} ${styles.boxWidth} ${styles.marginY} ${styles.padding} xs:hidden md:flex  h-[17rem] sm:flex-row flex-col  rounded-[20px] shadow-2xl bg-[#181e34] relative`}
    >
      <h2 className={`${styles.heading1} absolute -top-[4.5rem] left-10 `}>
        Contato
      </h2>
      <div className="flex-1 flex flex-row md:space-x-20 lg:justify-between h-40 ml-20 mr-24">
        <div className="flex flex-col  pt-5 pr-5">
          <a
            href="https://github.com/ruansmachado"
            alt="Github link"
            target="_blank"
            className="flex flex-col items-center "
          >
            <img
              src={github}
              alt="icon"
              className="w-[5rem] h-[5rem] flex flex-col "
            />
            <p className="flex text-white t-[1rem] p-2 text-center">
              Github <br />
              @ruansmachado
            </p>
          </a>
        </div>
        <div className="flex flex-col  pt-5">
          <a
            href="https://www.linkedin.com/in/ruan-machado/"
            alt="Linkedin link"
            target="_blank"
            className="flex flex-col items-center pt-3  "
          >
            <img
              src={linkedin}
              alt="icon"
              className="w-[4rem] h-[4rem] flex flex-col "
            />
            <p className="flex text-white t-[1rem] p-2 text-center">
              LinkedIn <br />
              @ruan-machado
            </p>
          </a>
        </div>{" "}
        <div className="flex flex-col  pt-5  ">
          <a
            href="mailto:ruansmachado@yahoo.com"
            alt="Email link"
            target="_blank"
            className="flex flex-col items-center "
          >
            <img
              src={email}
              alt="icon"
              className="w-[4.5rem] h-[4.5rem] flex flex-col rounded-2xl"
            />
            <p className="flex text-white t-[0.5rem] p-2 text-center">
              E-mail <br />
              ruansmachado@yahoo.com
            </p>
          </a>
        </div>
      </div>

      <div
        className={`${styles.flexCenter} flex-col mx-14 sm:ml-10 ml-0 sm:mt-0 mt-10 `}
      >
        <img
          src={curriculo}
          alt="icon"
          className={`w-[14rem] h-[20rem] justify-center rounded absolute -top-40 py-2`}
        />
        <Button />
      </div>
    </div>
  </section>
);

export default Contato;
