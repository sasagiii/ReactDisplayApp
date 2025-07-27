import { useEffect, useRef, useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import Styles from "./Carousel.module.css";

export default function Carousel({ items }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const child = container.children[index];
    if (!child) return;

    const containerRect = container.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    const offset =
      child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2;

    container.scrollTo({
      left: offset,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(currentIndex + 1, items.length - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    scrollToIndex(currentIndex); // initial scroll

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % items.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Styles.wrapper}>
      <button className={Styles.button} onClick={scrollLeft}>
        ◀
      </button>
      <div className={Styles.container} ref={containerRef}>
        {items.map((item, index) => (
          <div className={Styles.itemWrapper} key={index}>
            <CarouselItem item={item} index={index} />
          </div>
        ))}
      </div>
      <button className={Styles.button} onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}
