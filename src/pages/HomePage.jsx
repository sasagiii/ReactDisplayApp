import NavBar from "../components/NavBar/NavBar";
import { AppContext } from "../contexts/AppProvider";
import { useContext } from "react";
import Styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const { myInfo, loading } = useContext(AppContext);

  return (
    <div className={Styles.MainPage}>
      <NavBar />

      <div className={Styles.Container}>
        <img className={Styles.ImageSize} src="./ToulouseCity.jpg" />

        {loading ? (
          "Loading..."
        ) : (
          <div>
            <h1>
              Hi, I'am <span className={Styles.Name}>{myInfo.name}</span>
            </h1>
            <h3>{myInfo.title}</h3>
            {myInfo.desc}
          </div>
        )}
      </div>

      <div className={Styles.ButtonContainer}>
        <Link to="/Experience" className={Styles.link}>
          <button>Experience</button>
        </Link>
        <Link to="/Projects">
          <button> Projects</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
