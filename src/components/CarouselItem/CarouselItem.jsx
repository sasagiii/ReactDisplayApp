import Styles from "./CarouselItem.module.css";
import { useLocation } from "react-router-dom";

export default function CarouselItem({ item, index }) {
  const location = useLocation();

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a
      className={Styles.carouselLink}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(item.Title);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#/Projects#${item.Title}`);
      }}
    >
      <div className={Styles.carouselItem}>
        <div className={Styles.imageContainer}>
          <img
            className={Styles.carouselImage}
            src={item.ThumbnailName}
            alt={item.Title}
          />
          <div className={Styles.imageOverlay}>
            <div className={Styles.overlayContent}>
              <h3 className={Styles.itemTitle}>{item.Title}</h3>
              <span className={Styles.viewDetails}>View Details</span>
            </div>
          </div>
        </div>
        <div className={Styles.itemGlow}></div>
      </div>
    </a>
  );
}
