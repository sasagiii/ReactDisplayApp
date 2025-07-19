import NavBar from "../components/NavBar/NavBar";
import TimePointExp from "../components/TimePointExp/TimePointExp";
import { AppContext } from "../contexts/AppProvider";
import { useContext } from "react";

export default function ExperiencePage() {
  const { MyExpLst, loading } = useContext(AppContext);
  return (
    <div>
      <NavBar />
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
        <table style={{ borderCollapse: "collapse" }}>
          <tbody>
            {loading
              ? "is loading"
              : MyExpLst?.map((item, index) => (
                  <TimePointExp
                    title={item.title}
                    desc={item.desc}
                    year={item.year}
                    RightToLeft={index % 2 === 0}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
