import  ReactNode  from "react";
import styles from "./Formulario.module.css";

type FormularioProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Formulario({ children, className }: FormularioProps) {
  return (
    <div className={`container ${styles.formContainer}`}>
      <form className={`${styles.form} ${className || ""}`}>
        {children}
      </form>
    </div>
  );
}
