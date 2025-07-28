import { useEffect, useRef, useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import Styles from "./Carousel.module.css";

export default function Carousel({ items }) {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const children = container?.children;
    if (!container || !children || index < 0 || index >= children.length)
      return;

    const child = children[index];
    const containerWidth = container.offsetWidth;
    const childWidth = child.offsetWidth;

    const scrollLeft = child.offsetLeft - containerWidth / 2 + childWidth / 2;

    container.scrollTo({
      left: scrollLeft,
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
    scrollToIndex(currentIndex);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [items.length]);

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
