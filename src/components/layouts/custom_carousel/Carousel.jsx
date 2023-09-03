import { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import MainWrapper from "../MainWrapper";
import useFetch from "../../../hooks/useFetch";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CarouselItem from "./CarouseItem";


export default function Carousel({
  title,
  endpoints,
  videoPlayableCard,
  getBgPath,
  mediaType,
}) {
  const { data, loading } = useFetch(endpoints);
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
        <div
          className={`bg-[#202020] animate-pulse rounded-md ${
            !!videoPlayableCard ? "h-40 w-60" : "h-60 w-40"
          }`}
        />
        <div className="flex flex-col gap-2">
          <div className="bg-[#202020] animate-pulse rounded-md h-5 w-32" />
          <div className="bg-[#202020] animate-pulse rounded-md h-3 w-40" />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="overflow-hidden relative group w-full">
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
              {data?.results?.map((item, index) => {
                let releaseDate = item?.release_date || item?.first_air_date;

                return (
                  <CarouselItem
                    key={index}
                    item={item}
                    loading={loading}
                    getBgPath={getBgPath}
                    releaseDate={releaseDate}
                    videoPlayableCard={videoPlayableCard}
                    mediaType={mediaType}
                  />
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
    </>
  );
}
