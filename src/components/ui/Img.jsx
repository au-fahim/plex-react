import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Img({ alt, src, className }) {
  return (
    <LazyLoadImage
      className={className || ""}
      src={src}
      alt={alt}
      effect="blur"
    />
  );
}
