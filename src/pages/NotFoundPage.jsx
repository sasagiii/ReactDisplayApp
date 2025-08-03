import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Styles from "./NotFoundPage.module.css";
import { fetchRandomCatImage } from "../services/catService.js";
import { useState, useEffect } from "react";

export default function NotFoundPage() {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    const loadCatImage = async () => {
      const imageUrl = await fetchRandomCatImage();
      setCatImage(imageUrl);
    };

    loadCatImage();
  }, []);
  return (
    <div className={Styles.PageDiv}>
      <NavBar />
      <div className={Styles.Container}>
        <h1 className={Styles.Title}>Wrong Path or page not found...</h1>
        {catImage ? (
          <img src={catImage} width="500" height="325"></img>
        ) : (
          <p>Loading image...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
