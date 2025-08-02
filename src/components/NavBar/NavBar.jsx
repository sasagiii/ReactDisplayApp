import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navcontainer}>
        <div className={Styles.navsection}>
          <Link to="/" className={Styles.homelink}>
            <svg
              className={Styles.homeicon}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>
        </div>
        <div className={Styles.navsection}>
          <Link to="/Experience" className={Styles.navlink}>
            <span>Experience</span>
          </Link>
          <Link to="/Projects" className={Styles.navlink}>
            <span>Projects</span>
          </Link>
          <Link to="/Contact" className={Styles.navlink}>
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
