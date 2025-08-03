import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={Styles.contactPage}>
      <NavBar />

      <div className={Styles.contactContainer}>
        <div className={Styles.contactContent}>
          {/* Animated Background Elements */}
          <div className={Styles.bgElements}>
            <div className={`${Styles.floatingCircle} ${Styles.circle1}`}></div>
            <div className={`${Styles.floatingCircle} ${Styles.circle2}`}></div>
            <div className={`${Styles.floatingCircle} ${Styles.circle3}`}></div>
          </div>

          {/* Main Content */}
          <div className={Styles.mainContent}>
            <div className={Styles.contactMessage}>
              <div className={Styles.emojiContainer}>
                <span className={Styles.emoji}>😅</span>
              </div>
              <h2 className={Styles.simpleMessage}>Just use LinkedIn</h2>
            </div>

            {/* LinkedIn Section */}
            <div className={Styles.linkedinSection}>
              <div className={Styles.linkedinCard}>
                <div className={Styles.cardGlow}></div>
                <div className={Styles.linkedinContent}>
                  <div className={Styles.linkedinIconWrapper}>
                    <svg
                      className={Styles.linkedinIcon}
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/sami-ben-profile/?locale=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.linkedinButton}
                  >
                    <span>Here</span>

                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
