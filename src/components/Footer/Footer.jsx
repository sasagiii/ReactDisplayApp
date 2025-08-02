import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footercontent}>
        <p>&copy; 2025 Sami Ben Portfolio. Built with React</p>
      </div>
    </footer>
  );
}
