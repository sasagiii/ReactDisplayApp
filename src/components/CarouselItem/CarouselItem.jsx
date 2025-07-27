import Styles from "./CarouselItem.module.css";

export default function CarouselItem({ item, index }) {
  return (
    <a href={`#${item.Title}`}>
      <div key={index} className={Styles.container}>
        <img className={Styles.ImageSize} src={`./${item.ImageName}`} />
        <a href={`#${item.Title}`}>{item.Title}</a>
      </div>
    </a>
  );
}
