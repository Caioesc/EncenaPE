import React from "react";
import styles from "./Formulario.module.css";

type FormularioProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Formulario({ children, className }: FormularioProps) {
  // intercepta o submit e previne o recarregamento
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className={`container ${styles.formContainer}`}>
      <form className={`${styles.form} ${className || ""}`} onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
}
