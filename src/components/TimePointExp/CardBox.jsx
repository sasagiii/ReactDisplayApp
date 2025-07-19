import Styles from "./CardBox.module.css";

export default function CardBox({ desc, title }) {
  return (
    <div className={Styles.container}>
      {desc} {title}
    </div>
  );
}
