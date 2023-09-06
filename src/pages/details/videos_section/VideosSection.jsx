import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HiChevronLeft, HiChevronRight, HiPlay } from "react-icons/hi2";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import MainWrapper from "../../../components/layouts/MainWrapper";
import Img from "../../../components/ui/Img";
import dayjs from "dayjs";
import VideoPopup from "../../../components/layouts/video_popup/VideoPopup";



export default function VideosSection({ videos, loading }) {
  const { url } = useSelector((state) => state.home);

  const [showVideoPopup, setShowVideoPopup] = useState(false)
  const [videoId, setVideoId] = useState(null)
  const showModal = (id) => {
    setShowVideoPopup(true);
    setVideoId(id);
    document.body.style.overflowY = "hidden"
  };

  const carouselContainer = useRef();

  // Carousel Left & Right Scroll Function
  const scrollDirection = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 100)
        : container.scrollLeft + (container.offsetWidth - 100);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const customSkeleton = () => {
    return (
      <div className="flex-shrink-0 flex flex-col gap-3 py-4">
        <div className={`bg-[#202020] animate-pulse rounded-md h-60 w-40`} />
        <div className="flex flex-col gap-2">
          <div className="bg-[#202020] animate-pulse rounded-md h-5 w-32" />
          <div className="bg-[#202020] animate-pulse rounded-md h-3 w-40" />
        </div>
      </div>
    );
  };

  // API STRUCTURE EXAMPLE
  // id: "64c42e7441aac400aef083b3";
  // iso_639_1: "en";
  // iso_3166_1: "US";
  // key: "eKl7NyhV6VA";
  // name: "John Wick 4 - The Apartment Massacre - VFX Breakdown by Rodeo FX";
  // official: false;
  // published_at: "2023-07-18T12:58:09.000Z";
  // site: "YouTube";
  // size: 1080;
  // type: "Featurette";


  return (
    <>
      {videos?.results?.length > 0 && <div className="overflow-hidden relative group w-full">
        {/* CAROUSEL HEADER SECTION */}
        <MainWrapper>
          {loading ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#fff">
              <div className="mx-4 md:mx-0 w-48 lg:w-60 mb-4 animate-pulse duration-0 delay-0">
                <Skeleton height={30} />
              </div>
            </SkeletonTheme>
          ) : (
            <header className="carousel_header">
              <h1 className="carousel_title">Official Videos</h1>

              {/* CAROUSEL LEFT & RIGHT SCROLLING CONTROLLER */}
              <div className="carousel_controller">
                <button
                  className="icon_btn rounded-md hover:bg-white/10"
                  onClick={() => scrollDirection("left")}
                >
                  <HiChevronLeft size={22} />
                </button>
                <button
                  className="icon_btn rounded-md hover:bg-white/10"
                  onClick={() => scrollDirection("right")}
                >
                  <HiChevronRight size={22} />
                </button>
              </div>
            </header>
          )}
        </MainWrapper>

        {/* CAROUSEL ITEMS CONTAINER */}
        <section>
          {loading ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#fff">
              <div
                className={`w-full flex flex-row px-4 mx-auto gap-4 animate-pulse max-w-7xl overflow-auto`}
              >
                {customSkeleton()}
                {customSkeleton()}
                {customSkeleton()}
                {customSkeleton()}
                {customSkeleton()}
                {customSkeleton()}
                {customSkeleton()}
                {customSkeleton()}
              </div>
            </SkeletonTheme>
          ) : (
            <div className="carousel_contents" ref={carouselContainer}>
              {videos?.results?.map((video) => (
                <div
                  key={video.id}
                  onClick={() => showModal(video.key)}
                  className="w-11/12 sm:w-1/3 lg:w-3/12 flex-shrink-0 rounded-lg cursor-pointer flex flex-col md:gap-2 pb-2 overflow-hidden select-none group/playbtn group/title"
                >
                  <div className="cast_img w-full rounded-lg overflow-hidden relative">
                    <Img
                      src={`https://i.ytimg.com/vi/${video.key}/mqdefault.jpg`}
                    />

                    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
                      <HiPlay
                        size={50}
                        className={`text-white group-hover/playbtn:text-yellow-500 group-hover/playbtn:scale-125 active:scale-100 transition ${
                          loading && "hidden"
                        }`}
                      />
                    </div>
                  </div>

                  <h1 className="flex flex-col gap-1 px-2">
                    <strong className="text-gray-100 text-base md:text-lg line-clamp-2 group-hover/title:underline">
                      {video.name}
                    </strong>
                    <span className="text-gray-400 text-xs md:text-sm xl:text-base line-clamp-1">
                      {dayjs(video.published_at).format("DD MMM, YYYY")}
                    </span>
                  </h1>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SCROLL BAR COVER */}
        <div
          className={`bg-[#191919] absolute h-2 w-full bottom-0 left-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-z-50`}
        />
      </div>}

      {/* Show Video Popup Modal */}
      <VideoPopup
        showVideoPopup={showVideoPopup}
        setShowVideoPopup={setShowVideoPopup}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </>
  );
}