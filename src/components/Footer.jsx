import styles from "../style";
import { socialMedia } from "../constants";
import { icon } from "../assets";

const Footer = () => (
  <section
    className={`${styles.flexCenter} place-items-center relative sm:pt-36 sm:pb-14 pb-6 flex-col`}
  >
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start items-center">
        <img src={icon} alt="hoobank" className="w-[20%] h-[30%]" />
        <p className={`${styles.paragraph} mt-0.5 max-w-[250px] indent-10`}>
          Desenvolvedor web -
        </p>
        <p className={`${styles.paragraph} mt-1  max-w-[250px] indent-20`}>
          React/TailWind/Git
        </p>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6">
      <p className="font-montserrat text-center text-[15px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Ruandev. Todos os direitos reservados.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
