import Img from "../../ui/Img";

export default function CarouselItem(prop) {
  const { id, imgSrc, altText } = prop
  return (
    <div
      key={id}
      className="w-1/5 lg:w-2/12 flex-shrink-0 bg-cover bg-center rounded-md mb-2"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <Img src={imgSrc} alt={altText} className="invisible" />
    </div>
  );
}