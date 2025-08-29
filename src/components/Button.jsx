import React from "react";
import { curriculoPDF } from "../assets";

const Button = ({ styles }) => {
  const baseClasses =
    "inline-block py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]";
  return (
    <a
      href={curriculoPDF}
      download="curriculo_ruan_machado.pdf"
      className={`${baseClasses} ${styles}`}
      aria-label="Baixar Currículo em PDF"
    >
      Baixar CV
    </a>
  );
};

export default Button;
