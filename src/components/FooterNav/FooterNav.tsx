import React from "react";
import { Home, MessageSquare, User } from "lucide-react";
import styles from "./FooterNav.module.css";

const FooterNav: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="/home"><Home size={28} /></a>
      <a href="/chat"><MessageSquare size={28} /></a>
      <a href="/perfil"><User size={28} /></a>
    </footer>
  );
};

export default FooterNav;
