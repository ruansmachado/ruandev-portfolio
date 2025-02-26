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

const SEO_CONFIG = {
  title: "Ruan Machado - Portfolio",
  description: "Portfolio profissional com projetos e habilidades",
  keywords: "portfolio, desenvolvimento, web, react",
  siteUrl: "https",
};

/** Aplicação principal, responsável por renderizar o layout básico
  do portfólio com uso de elementos semânticos. */

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#2A5851] from-10% via-[#2A3158] via-30% to-[#2A4858] w-full overflow-hidden">
      <Helmet>
        {/* Básico */}
        <title>{SEO_CONFIG.title}</title>
        <meta name="description" content={SEO_CONFIG.description} />
        <meta name="keywords" content={SEO_CONFIG.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_CONFIG.siteUrl} />
        <meta property="og:title" content={SEO_CONFIG.title} />
        <meta property="og:description" content={SEO_CONFIG.description} />
        <meta
          property="og:image"
          content={`${SEO_CONFIG.siteUrl}/og-image.jpg`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SEO_CONFIG.siteUrl} />
        <meta name="twitter:title" content={SEO_CONFIG.title} />
        <meta name="twitter:description" content={SEO_CONFIG.description} />
        <meta
          name="twitter:image"
          content={`${SEO_CONFIG.siteUrl}/og-image.jpg`}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Outros meta tags importantes */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2A5851" />
        <meta name="author" content="Seu Nome" />
        <link rel="canonical" href={SEO_CONFIG.siteUrl} />
      </Helmet>

      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>

      <main className={styles.main}>
        <Hero />
        <section
          className={styles.cards}
          aria-label="Seção de Habilidades e Projetos"
        >
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
