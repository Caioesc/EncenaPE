import React, { useEffect, useState } from "react";
import api from "../../api";
import styles from "./Header.module.css";

interface User {
  id: number;
  nome: string;
  fotoUrl: string;
}

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api
      .get("/1") // trocar pelo usuário logado futuramente
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Erro ao carregar usuário", err));
  }, []);

  return (
    <header className={styles.header}>
      <img
        src={user?.fotoUrl || "https://via.placeholder.com/50"}
        alt="Foto do usuário"
        className={styles.avatar}
      />
      <h2 className={styles.title}>
        Olá, Bem-vindo {user?.nome || "Usuário"}
      </h2>
    </header>
  );
};

export default Header;
