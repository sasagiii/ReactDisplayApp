import Styles from "./Carousel.module.css";

export default function Carousel({ items }) {
  return (
    <div className={Styles.container}>
      {items.map((item, index) => (
        <a key={index} href={`#${item.Title}`}>
          {item.Title}
        </a>
      ))}
    </div>
  );
}
