import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HiChevronLeft, HiChevronRight, HiPlay } from "react-icons/hi2";


import Img from './../../ui/Img';
import MainWrapper from "../MainWrapper";
import useFetch from "../../../hooks/useFetch";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dayjs from "dayjs";


export default function Carousel({ title, endpoints, videoPlayableCard, getBgPath }) {
  const { data, loading } = useFetch(endpoints);
  const { url } = useSelector((state) => state.home);
  const carouselContainer = useRef()

  // Carousel Left & Right Scroll Function
  const scrollDirection = (dir) => {
    const container = carouselContainer.current

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 100)
        : container.scrollLeft + (container.offsetWidth - 100);
    
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    })
  }

  const customSkeleton = () => {
    return (
      <div className="flex-shrink-0 flex flex-col gap-3">
        <div
          className={`bg-[#202020] rounded-md ${
            !!videoPlayableCard ? "h-40 w-60" : "h-60 w-40"
          }`}
        />
        <div className="flex flex-col gap-2">
          <div className="bg-[#202020] rounded-md h-5 w-32" />
          <div className="bg-[#202020] rounded-md h-3 w-40" />
        </div>
      </div>
    );
  }

  return (
    <>
      <MainWrapper>
        <div className="overflow-hidden relative group w-full">
          {/* CAROUSEL HEADER SECTION */}
          {loading && !title ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#fff">
              <div className="mx-4 md:mx-0 w-48 lg:w-60 mb-4 animate-pulse duration-0 delay-0">
                <Skeleton height={30} />
              </div>
            </SkeletonTheme>
          ) : (
            <header className="carousel_header">
              <h1
                className={`carousel_title ${
                  !!videoPlayableCard && "text-2xl sm:text-3xl 2xl:text-4xl"
                }`}
              >
                {title}
              </h1>

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

          {/* CAROUSEL ITEMS CONTAINER */}
          <section>
            {loading ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#fff">
                <div
                  className={`w-full flex flex-row flex-nowrap mx-4 md:mx-0 gap-4 animate-pulse duration-0 delay-0`}
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
              <div className="carousel_contents w-screen" ref={carouselContainer}>
                {data?.results?.map((item, index) => {
                  let releaseDate = item?.release_date || item?.first_air_date;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() =>
                        videoPlayableCard && getBgPath(item?.backdrop_path)
                      }
                      className={`carousel_item group/card overflow-hidden ${
                        !!videoPlayableCard
                          ? "shadow-md w-3/4 sm:w-1/2 md:w-1/3 relative hover:scale-95"
                          : "w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-52"
                      }`}
                    >
                      <Img
                        src={
                          !!videoPlayableCard
                            ? url?.backdrop_w780 + item?.backdrop_path
                            : url?.poster + item?.poster_path
                        }
                        alt={item?.title || item?.name}
                        className={`rounded-md h-full border-2 border-white/0 transition duration-200 ease-in-out ${
                          !videoPlayableCard
                            ? "hover:border-gray-300"
                            : "hover:border-yellow-500"
                        }`}
                      />

                      <div
                        className={`w-full ${
                          videoPlayableCard &&
                          "absolute bottom-2 bg-gradient-to-t from-20% from-black/80 to-black/0 select-none"
                        }`}
                      >
                        <article
                          className={`text-white px-1 mb-2 ${
                            videoPlayableCard && "mx-4 mb-4"
                          }`}
                        >
                          <h1 className="font-medium text-base md:text-lg line-clamp-1">
                            {item?.title || item?.name}
                          </h1>
                          <p className="text-xs md:text-sm text-gray-300">
                            {dayjs(releaseDate).format("D  MMM, YYYY")}
                          </p>
                        </article>
                      </div>

                      {!!videoPlayableCard && (
                        <HiPlay
                          size={56}
                          className={`cart_playbtn ${loading && "hidden"}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* SCROLL BAR COVER */}
          <div
            className={`${
              videoPlayableCard ? "bg-transparent" : "bg-[#191919]"
            } absolute h-2 w-full bottom-0 left-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-z-50`}
          />
        </div>
      </MainWrapper>
    </>
  );
}