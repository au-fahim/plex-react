import Img from "../../ui/Img";

export default function CarouselItem({ id, imgSrc, altText }) {
  return (
    <div
      key={index}
      className={`carousel_item group/card ${
        videoPlayableCard
          ? "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative hover:scale-95 hover:bg-black"
          : "w-2/5 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-44 "
      }`}
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <Img src={item.img} alt={item.alt} className="invisible" />

      {videoPlayableCard && <HiPlay size={56} className="cart_playbtn" />}
    </div>
  );
}