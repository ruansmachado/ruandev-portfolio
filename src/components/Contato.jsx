import styles from "../style";
import Button from "./Button";
import { curriculo, github, linkedin, email } from "../assets";

const contatoLinks = [
  {
    id: "github",
    icon: github,
    url: "https://github.com/ruansmachado",
    label: "Github",
    username: "@ruansmachado",
  },

  {
    id: "linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/ruan-machado/",
    label: "LinkedIn",
    username: "@ruan-machado",
  },

  {
    id: "email",
    icon: email,
    url: "mailto:ruansmachado@yahoo.com",
    label: "E-mail",
    username: "ruansmachado@yahoo.com",
  },
];

const Contato = () => (
  <section
    className={`h-5rem ${
      styles.paddingX || "px-6 sm:px-16"
    } xs:mt-[5rem] ss:mt-[15rem]`}
  >
    {/* --- ESTRUTURA UNIFICADA E RESPONSIVA --- */}
    <div
      className={`relative flex items-center ${styles.boxWidth} ${styles.marginY} ${styles.padding} h-auto md:h-[17rem] flex-col md:flex-row rounded-[20px] shadow-2xl bg-[#181e34] md:justify-between mx-auto`}
    >
      {/* Título Visível apenas no Desktop */}
      <h2
        className={`${styles.heading1} hidden md:block absolute -top-[4.5rem] left-10`}
      >
        Contato
      </h2>

      {/* Links de Contato (Visível apenas no Desktop, usando .map()) */}
      <div className="hidden md:flex flex-row md:space-x-10 lg:space-x-20 h-40">
        {contatoLinks.map((contact) => (
          <div key={contact.id} className="flex flex-col pt-5">
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer" // Adicionado por segurança
              className="flex flex-col items-center"
              aria-label={`Link para ${contact.label}`}
            >
              <img
                src={contact.icon}
                alt="" // Decorativo, pois o texto abaixo descreve o link
                // Tamanho unificado para consistência visual
                className="w-[4.5rem] h-[4.5rem] flex flex-col rounded-2xl object-contain"
              />
              <p className="flex text-white t-[1rem] p-2 text-center">
                {contact.label} <br />
                {contact.username}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* Bloco do Currículo (Visível em todos os tamanhos) */}
      <div className={`${styles.flexCenter} flex-col  ml-0 mt-10 md:mt-0`}>
        <img
          src={curriculo}
          alt="Capa do currículo"
          className={`w-[14rem] h-[20rem] justify-center rounded absolute -top-40 py-2`}
        />
        <Button styles="mt-32" />
      </div>
    </div>
  </section>
);

export default Contato;
