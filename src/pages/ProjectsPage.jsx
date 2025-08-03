import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import projectPers from "./projectPers.json";
import Styles from "./ProjectsPage.module.css";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";

export default function ProjectPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(projectPers);
  }, []);

  return (
    <div className={Styles.projectsPage}>
      <NavBar />
      <Carousel items={items} />

      <div className={Styles.projectsSection}>
        <div className={Styles.sectionHeader}>
          <h2 className={Styles.sectionTitle}>Project Details</h2>
          <div className={Styles.sectionDivider}></div>
        </div>

        <div className={Styles.projectsContainer}>
          {items.map((item, index) => (
            <div key={index} className={Styles.projectCard} id={item.Title}>
              <div
                className={`${Styles.projectContent} ${
                  index % 2 === 0 ? Styles.leftAlign : Styles.rightAlign
                }`}
              >
                <div className={Styles.projectImageContainer}>
                  <img
                    className={Styles.projectImage}
                    src={item.ImageName}
                    alt={item.Title}
                  />
                  <div className={Styles.projectImageOverlay}></div>
                </div>

                <div className={Styles.projectInfo}>
                  <div className={Styles.projectNumber}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className={Styles.projectTitle}>{item.Title}</h2>
                  <div
                    className={Styles.projectDescription}
                    dangerouslySetInnerHTML={{ __html: item.Desc }}
                  />
                  <div className={Styles.projectActions}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
