import CardBox from "./CardBox";
import TimeLine from "./TimeLine";

export default function TimePointExp() {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        margin: "0 auto",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardBox />
      <TimeLine />
      year
    </div>
  );
}
