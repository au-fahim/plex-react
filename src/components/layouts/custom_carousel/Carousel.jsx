import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HiChevronLeft, HiChevronRight, HiPlay } from "react-icons/hi2";


import Img from './../../ui/Img';
import MainWrapper from "../MainWrapper";
import useFetch from "../../../hooks/useFetch";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


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
      <div
        className={`bg-[#202020] rounded-md flex-shrink-0 ${
          !!videoPlayableCard ? "h-40 w-60" : "h-60 w-40"
        }`}
      ></div>
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
              <div className="carousel_contents" ref={carouselContainer}>
                {data?.results?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() =>
                        videoPlayableCard && getBgPath(item?.backdrop_path)
                      }
                      className={`carousel_item group/card ${
                        !!videoPlayableCard
                          ? "shadow-md w-3/4 sm:w-1/2 md:w-1/3 relative hover:scale-95 hover:border-yellow-500"
                          : "w-2/5 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-52"
                      }`}
                      // style={{
                      //   backgroundImage: `url(${
                      //     !!videoPlayableCard
                      //       ? url?.backdrop_w780 + item?.backdrop_path
                      //       : url?.poster + item?.poster_path
                      //   })`,
                      // }}
                    >
                      <Img
                        src={
                          !!videoPlayableCard
                            ? url?.backdrop_w780 + item?.backdrop_path
                            : url?.poster + item?.poster_path
                        }
                        alt={item?.title}
                        className="rounded-md"
                      />

                      {videoPlayableCard && (
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