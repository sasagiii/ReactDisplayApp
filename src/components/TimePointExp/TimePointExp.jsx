import CardBox from "./CardBox";
import TimeLine from "./TimeLine";
import Styles from "./TimePointExp.module.css";

export default function TimePointExp({
  title,
  desc,
  year,
  RightToLeft = false,
}) {
  return (
    <tr className={Styles.timepointRow}>
      {RightToLeft ? (
        <>
          <td className={`${Styles.yearCell} ${Styles.rightAlign}`}>
            <div className={Styles.yearBadge}>
              <span className={Styles.yearText}>{year}</span>
            </div>
          </td>
          <td className={Styles.timelineCell}>
            <TimeLine />
          </td>
          <td className={Styles.cardCell}>
            <CardBox title={title} desc={desc} />
          </td>
        </>
      ) : (
        <>
          <td className={Styles.cardCell}>
            <CardBox title={title} desc={desc} />
          </td>
          <td className={Styles.timelineCell}>
            <TimeLine />
          </td>
          <td className={`${Styles.yearCell} ${Styles.leftAlign}`}>
            <div className={Styles.yearBadge}>
              <span className={Styles.yearText}>{year}</span>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}
