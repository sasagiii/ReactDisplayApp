import CardBox from "./CardBox";
import TimeLine from "./TimeLine";

export default function TimePointExp({
  title,
  desc,
  year,
  RightToLeft = false,
}) {
  return (
    <tr>
      {RightToLeft ? (
        <>
          <td style={{ border: "none", padding: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{year}</p>
            </div>
          </td>
          <td style={{ border: "none", padding: "10px" }}>
            <TimeLine />
          </td>

          <td style={{ border: "none", padding: "10px" }}>
            <CardBox title={title} desc={desc} />
          </td>
        </>
      ) : (
        <>
          <td style={{ border: "none", padding: "10px" }}>
            <CardBox title={title} desc={desc} />
          </td>

          <td style={{ border: "none", padding: "10px" }}>
            <TimeLine />
          </td>

          <td style={{ border: "none", padding: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{year}</p>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}
