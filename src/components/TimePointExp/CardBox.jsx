import Styles from "./CardBox.module.css";

export default function CardBox({ desc, title }) {
  return (
    <div className={Styles.container}>
      <h3>{title}</h3>
      {desc}
    </div>
  );
}
