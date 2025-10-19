import React, { useEffect, useState } from "react";
import api from "../../api";
import styles from "./EventCarousel.module.css";

interface Evento {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  cidade: string;
  local: string;
}

const EventCarousel: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    api
      .get("/eventos/proximos")
      .then((res) => setEventos(res.data))
      .catch((err) => console.error("Erro ao carregar eventos", err));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3>Próximos Eventos</h3>
        <a href="/eventos" className={styles.link}>ver mais &gt;</a>
      </div>
      <div className={styles.carousel}>
        {eventos.map((evento) => (
          <div key={evento.id} className={styles.card}>
            <strong>{evento.titulo}</strong>
            <p>Dia {evento.data} às {evento.horario}</p>
            <p>{evento.cidade} - {evento.local}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCarousel;
