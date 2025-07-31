import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={Styles.PageDiv}>
      <NavBar />
      <div className={Styles.Container}>
        <h1>Just use LinkedIn 😅</h1>
        <a
          href="https://www.linkedin.com/in/sami-ben-profile/?locale=en_US"
          target="_blank"
        >
          <img src="./LinkedIn_icon.webp" width="50" height="50"></img>
        </a>
      </div>
      <Footer />
    </div>
  );
}
