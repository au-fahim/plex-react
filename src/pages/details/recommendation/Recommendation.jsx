import Carousel from "../../../components/layouts/custom_carousel/Carousel";

export default function Recommendation({mediaType, id}) {
  const title = mediaType === "tv" ? "Recommended TV Shows" : "Recommended Movies"

  return (
    <Carousel
      title="Recommended for you"
      mediaType={mediaType}
      endpoints={`${mediaType}/${id}/recommendations`}
    />
  );
}