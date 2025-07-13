import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.section}>
        <Link to="/">
          <svg
            className={Styles.HomeIcon}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>
      </div>
      <div className={Styles.section}>
        <Link to="/Experience" className={Styles.link}>
          <label>Open exp</label>
        </Link>
        <Link to="/Projects">
          <label>Open Projects</label>
        </Link>
        <Link to="/Contact">
          <label>Open coontact</label>
        </Link>
      </div>
    </div>
  );
}
