import styles from "./style";

import {
  Navbar,
  Hero,
  CardHabilidades,
  CardProjetos,
  Contato,
  Footer,
} from "./components";

import SectionWrapper from "./components/SectionWrapper";

/** Aplicação principal, responsável por renderizar o layout básico
  do portfólio com uso de elementos semânticos. */

const App = () => (
  <div className="bg-gradient-to-b from-[#2A5851] from-10% via-[#2A3158] via-30% to-[#2A4858] w-full overflow-hidden">
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </header>

    {/*
      MAIN: engloba todas as seções principais da página.
    */}

    <main>
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CardHabilidades />
        </div>
      </section>
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CardProjetos />
        </div>
      </section>
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Contato />
        </div>
      </section>
    </main>

    {/*
    FOOTER:
      Responsável pelas informações de rodapé, links de redes sociais, etc.
    */}

    <footer className={` ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
);

export default App;
