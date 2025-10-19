import React from "react";
import Header from "../../components/Header/Header";
import EventCarousel from "../../components/EventCarousel/EventCarousel";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import FooterNav from "../../components/FooterNav/FooterNav";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <EventCarousel />
        <CategoryGrid />
      </main>
      <FooterNav />
    </div>
  );
};

export default Home;
