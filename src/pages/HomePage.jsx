import NavBar from "../components/NavBar/NavBar";
import { AppContext } from "../contexts/AppProvider";
import { useContext } from "react";

export default function HomePage() {
  const { myInfo, loading } = useContext(AppContext);

  return (
    <div>
      <NavBar />

      {loading ? "Loading..." : <p>Home Page: {myInfo.desc}</p>}
    </div>
  );
}
