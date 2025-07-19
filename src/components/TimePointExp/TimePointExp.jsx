import CardBox from "./CardBox";
import TimeLine from "./TimeLine";

export default function TimePointExp({
  title,
  desc,
  year,
  RightToLeft = false,
}) {
  return (
    <tr style={{ height: "100%" }}>
      {RightToLeft ? (
        <>
          <td style={{ border: "none", padding: "0px", verticalAlign: "top" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                color: "beige",
              }}
            >
              {year}
            </div>
          </td>
          <td
            style={{
              border: "none",
              padding: "0px",
              verticalAlign: "top",
              height: "100%",
            }}
          >
            <TimeLine />
          </td>

          <td style={{ border: "none", padding: "0px", verticalAlign: "top" }}>
            <CardBox title={title} desc={desc} />
          </td>
        </>
      ) : (
        <>
          <td style={{ border: "none", padding: "0px", verticalAlign: "top" }}>
            <CardBox title={title} desc={desc} />
          </td>

          <td
            style={{
              border: "none",
              padding: "0px",
              verticalAlign: "top",
              height: "100%",
            }}
          >
            <TimeLine />
          </td>

          <td
            style={{
              border: "none",
              padding: "0px",
              verticalAlign: "top",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "beige",
              }}
            >
              {year}
            </div>
          </td>
        </>
      )}
    </tr>
  );
}
