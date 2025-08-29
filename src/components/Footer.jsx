import styles from "../style";
import { socialMedia } from "../constants";
import { icon } from "../assets";

const Footer = () => (
  <footer
    className={`${styles.flexCenter} ${
      styles.paddingX || "px-6 sm:px-16"
    } place-items-center relative sm:pt-36 sm:pb-14 pb-6 flex-col`}
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

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[#3F3E45] border-t-[1px]">
      <p className="font-montserrat text-center text-[15px] leading-[27px] text-white">
        Copyright {"\u00A9"} {new Date().getFullYear()} Ruandev. Todos os
        direitos reservados.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 space-x-6">
        {socialMedia.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar perfil no ${social.id}`}
            className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src={social.icon}
              alt="" // Decorativo
              className="w-[21px] h-[21px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
