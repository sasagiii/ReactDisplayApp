import Styles from "./TimeLine.module.css";

export default function TimeLine() {
  return (
    <div className={Styles.container}>
      <div className={Styles.circle}></div>
      <div className={Styles.line}></div>
    </div>
  );
}
