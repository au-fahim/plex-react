export default function CarouselItem({id, src, alt}) {
  return (
    <div
      className="border border-transparent hover:border-gray-50 rounded-md select-none bg-cover bg-top bg-no-repeat"
      style={{backgroundImage: `url(${src})`}}
    >
      <img src={src} alt={alt} className="invisible"/>
    </div>
  );
}