import Styles from "./TimeLine.module.css";

export default function TimeLine() {
  return (
    <div className={Styles.timelineContainer}>
      <div className={Styles.timelineCircle}>
        <div className={Styles.circleInner}></div>
      </div>
      <div className={Styles.timelineLine}></div>
    </div>
  );
}
