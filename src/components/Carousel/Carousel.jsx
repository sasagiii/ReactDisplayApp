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
    <div className={Styles.carouselWrapper}>
      <div className={Styles.carouselHeader}>
        <h1 className={Styles.carouselTitle}>Featured Projects</h1>
        <p className={Styles.carouselSubtitle}>Explore my latest work</p>
      </div>

      <div className={Styles.carouselControls}>
        <button
          className={`${Styles.carouselButton} ${Styles.left}`}
          onClick={scrollLeft}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={Styles.carouselContainer} ref={containerRef}>
          {items.map((item, index) => (
            <div className={Styles.carouselItemWrapper} key={index}>
              <CarouselItem item={item} index={index} />
            </div>
          ))}
        </div>

        <button
          className={`${Styles.carouselButton} ${Styles.right}`}
          onClick={scrollRight}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={Styles.carouselIndicators}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${Styles.indicator} ${
              index === currentIndex ? Styles.active : ""
            }`}
            onClick={() => {
              setCurrentIndex(index);
              scrollToIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
