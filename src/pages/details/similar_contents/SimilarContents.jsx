import Carousel from "../../../components/layouts/custom_carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

export default function SimilarContents({ mediaType, id }) {
  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <>
      <Carousel
        title={title}
        mediaType={mediaType}
        endpoints={`/${mediaType}/${id}/similar`}
      />
    </>
  );
}