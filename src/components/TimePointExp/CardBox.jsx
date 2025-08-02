import Styles from "./CardBox.module.css";

export default function CardBox({ desc, title }) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardHeader}>
        <h3 className={Styles.cardTitle}>{title}</h3>
      </div>
      <div className={Styles.cardContent}>
        <p className={Styles.cardDescription}>{desc}</p>
      </div>
      <div className={Styles.cardGlow}></div>
    </div>
  );
}
