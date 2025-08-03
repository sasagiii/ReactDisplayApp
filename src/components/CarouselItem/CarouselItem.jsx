import Styles from "./CarouselItem.module.css";

export default function CarouselItem({ item, index }) {
  return (
    <a href={`#${item.Title}`} className={Styles.carouselLink}>
      <div className={Styles.carouselItem}>
        <div className={Styles.imageContainer}>
          <img
            className={Styles.carouselImage}
            src={item.ImageName}
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
