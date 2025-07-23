import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import projectPers from "./projectPers.json";
import Styles from "./ProjectsPage.module.css";
import Carousel from "../components/Carousel/Carousel";

export default function ProjectPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(projectPers);
  }, []);

  return (
    <>
      <NavBar />
      <Carousel items={items} />
      <div>
        {items.map((item, index) => (
          <div key={index} className={Styles.Container} id={item.Title}>
            {index % 2 === 0 ? (
              <>
                <p>{item.ImageName}</p>
                <div>
                  <h2>{item.Title}</h2>
                  <p>{item.Desc}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2>{item.Title}</h2>
                  <p>{item.Desc}</p>
                </div>
                <p>{item.ImageName}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
