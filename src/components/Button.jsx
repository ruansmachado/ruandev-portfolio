import React from "react";
import { curriculoPDF } from "../assets";

const Button = ({ styles }) => {
  return (
    <a href={curriculoPDF} download="curriculo">
      <button
        type="button"
        className={`mt-32 py-4 px-6 bg-blue-gradient hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      >
        Baixar CV
      </button>
    </a>
  );
};

export default Button;
