import NavBar from "../components/NavBar/NavBar";
import { AppContext } from "../contexts/AppProvider";
import { useContext } from "react";
import Styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const { myInfo, loading } = useContext(AppContext);

  return (
    <div className="main-page">
      <NavBar />

      {/* Hero Section */}
      <section className={Styles.heroSection}>
        <div className={Styles.heroContainer}>
          <div className={Styles.heroImage}>
            <div className={Styles.imageWrapper}>
              <img
                src="./ToulouseCity.jpg"
                alt="Profile or City View"
                className={Styles.heroImg}
              />
              <div className={Styles.imageOverlay}></div>
            </div>
          </div>

          <div className={Styles.heroContent}>
            {loading ? (
              <div className={Styles.loading}>
                <div className={Styles.loadingSpinner}></div>
                <span>Loading...</span>
              </div>
            ) : (
              <div className={Styles.introText}>
                <h1 className={Styles.mainHeading}>
                  Hi, I'm{" "}
                  <span className={Styles.nameHighlight}>{myInfo.name}</span>
                </h1>
                <h3 className={Styles.title}>{myInfo.title}</h3>
                <p className={Styles.description}>{myInfo.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={Styles.ctaSection}>
        <div className={Styles.buttonContainer}>
          <Link
            to="/Experience"
            className={`${Styles.ctaButton} ${Styles.primary}`}
          >
            <span>Experience</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to="/Projects"
            className={`${Styles.ctaButton} ${Styles.secondary}`}
          >
            <span>Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
