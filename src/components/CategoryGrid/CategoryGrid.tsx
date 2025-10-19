import React, { useEffect, useState } from "react";
import api from "../../api";
import styles from "./CategoryGrid.module.css";

interface Categoria {
  id: number;
  nome: string;
}

const CategoryGrid: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    api
      .get("/categorias")
      .then((res) => setCategorias(res.data))
      .catch((err) => console.error("Erro ao carregar categorias", err));
  }, []);

  const handleClick = (nome: string) => {
    window.location.href = `/categoria/${nome.toLowerCase()}`;
  };

  return (
    <section className={styles.container}>
      <h3>Categorias</h3>
      <div className={styles.grid}>
        {categorias.map((cat) => (
          <div
            key={cat.id}
            className={styles.card}
            onClick={() => handleClick(cat.nome)}
          >
            {cat.nome}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
