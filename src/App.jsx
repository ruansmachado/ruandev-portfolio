import styles from "./style";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Hero,
  CardHabilidades,
  CardProjetos,
  Contato,
  Footer,
} from "./components";

/** Aplicação principal, responsável por renderizar o layout básico
  do portfólio com uso de elementos semânticos. */

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#2A5851] from-10% via-[#2A3158] via-30% to-[#2A4858] w-full overflow-hidden">
      <Helmet>
        <title>Seu Nome - Portfolio</title>
        <meta
          name="description"
          content="Portfolio profissional com projetos e habilidades"
        />
        <meta
          name="keywords"
          content="portfolio, desenvolvimento, web, react"
        />
      </Helmet>
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>

      <main className={styles.main}>
        <Hero />
        <section className={styles.cards}>
          <CardHabilidades />
          <CardProjetos />
          <Contato />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
