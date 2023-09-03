import { HiPlay } from "react-icons/hi2";
import Img from "../../ui/Img";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { getVideoEndpoint } from "../../../utils/getVideoEndpoint";
import useFetch from "../../../hooks/useFetch";
import { setShowVideoPopup, setVideoId } from "../../../store/videoPoupuSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function CarouselItem({
  item,
  loading,
  getBgPath,
  mediaType,
  releaseDate,
  videoPlayableCard,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { url } = useSelector((state) => state.home);
  const { id, name, title, backdrop_path, poster_path } = item;

  // let officialVideo

  // const getVideoHandler = () => {
  //   const { data: videoData, loading: videoLoading } = useFetch(
  //     `/${mediaType}/${id}/videos`
  //   );
  //   officialVideo = videoData?.results?.find(
  //     (item) => item?.type === "Trailer"
  //   );
  // }

  // useEffect(() => {
  //   getVideoHandler()
  // })

  // console.log(officialVideo);


  return (
    <div
      key={id}
      onClick={() => navigate(`${mediaType}/${id}`)}
      onMouseEnter={() => videoPlayableCard && getBgPath(backdrop_path)}
      className={`carousel_item group/card overflow-hidden rounded-md ${
        !!videoPlayableCard
          ? "w-11/12 sm:w-1/2 md:w-1/3 relative hover:scale-95"
          : "w-2/5 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-52"
      }`}
    >
      {/* CAROUSEL ITEM IMAGE */}
      <div className="relative">
        <Img
          src={
            !!videoPlayableCard
              ? url?.backdrop_w780 + backdrop_path
              : url?.poster + poster_path
          }
          alt={title || name}
          className={`rounded-md h-full border-2 border-white/0 transition duration-200 ease-in-out ${
            !videoPlayableCard && "hover:border-gray-300"
          }`}
        />
        {/* <div>
          <HiPlay size={44} className={`cart_playbtn ${loading && "hidden"}`} />
        </div> */}
      </div>

      {/* CAROUSEL ITEM TITLE */}
      <div
        className={`w-full ${
          videoPlayableCard &&
          "absolute bottom-2 bg-gradient-to-t from-20% from-black/80 to-black/0 select-none"
        }`}
      >
        <article
          className={`text-white px-1 mb-2 ${videoPlayableCard && "mx-4 mb-4"}`}
        >
          <h1 className="font-medium text-sm md:text-lg line-clamp-1">
            {title || name}
          </h1>
          <p className="text-xs md:text-sm text-gray-300">
            {dayjs(releaseDate).format("D  MMM, YYYY")}
          </p>
        </article>
      </div>

      {!!videoPlayableCard && (
        <HiPlay size={56} className={`cart_playbtn ${loading && "hidden"}`} />
      )}
    </div>
  );
}
