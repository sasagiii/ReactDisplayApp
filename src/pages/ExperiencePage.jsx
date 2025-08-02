import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import TimePointExp from "../components/TimePointExp/TimePointExp";
import { AppContext } from "../contexts/AppProvider";
import { useContext } from "react";
import Styles from "./ExperiencePage.module.css";

export default function ExperiencePage() {
  const { MyExpLst, loading } = useContext(AppContext);
  return (
    <div className={Styles.experiencePage}>
      <NavBar />

      <div className={Styles.pageHeader}>
        <h1 className={Styles.pageTitle}>My Journey</h1>
        <p className={Styles.pageSubtitle}>
          A timeline of my professional experience and growth
        </p>
      </div>

      <div className={Styles.timelineWrapper}>
        {loading ? (
          <div className={Styles.loadingContainer}>
            <div className={Styles.loadingSpinner}></div>
            <span className={Styles.loadingText}>Loading experiences...</span>
          </div>
        ) : (
          <table className={Styles.timelineTable}>
            <tbody>
              {MyExpLst?.map((item, index) => (
                <TimePointExp
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  year={item.year}
                  RightToLeft={index % 2 === 0}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </div>
  );
}
