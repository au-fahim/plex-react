import { useRef } from "react";
import { useSelector } from "react-redux";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import Img from "../../../components/ui/Img";
import thumbImg from "/no_img.png";
import MainWrapper from './../../../components/layouts/MainWrapper';


import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



export default function Cast({ castData, loading }) {
  const { url } = useSelector((state) => state.home)

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

  return (
    <>
      {castData?.length > 0 && (
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
                <h1 className="carousel_title">Top Cast</h1>

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
                {castData?.map((cast) => {
                  console.log(cast?.profile_path);
                  return (
                    <div
                      key={cast.id}
                      className="w-4/12 sm:w-3/12 md:w-2/12 flex-shrink-0 rounded-lg cursor-pointer flex flex-col md:gap-2 pb-2 overflow-hidden select-none group/title"
                    >
                      {cast?.profile_path === null ? (
                        <img
                          src={thumbImg}
                          alt={cast.name}
                          className="invert"
                        />
                      ) : (
                        <div className="cast_img w-full rounded-lg overflow-hidden">
                          <Img
                            src={url?.profile + cast?.profile_path}
                            alt={cast.name}
                          />
                        </div>
                      )}

                      <h1 className="flex flex-col gap-px px-2">
                        <strong className="text-white text-base md:text-lg 2xl:text-xl line-clamp-2 group-hover/title:underline">
                          {cast.name}
                        </strong>
                        <span className="text-gray-400 text-xs md:text-sm xl:text-base line-clamp-1">
                          {cast.character}
                        </span>
                      </h1>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* SCROLL BAR COVER */}
          <div
            className={`bg-[#191919] absolute h-2 w-full bottom-0 left-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-z-50`}
          />
        </div>
      )}
    </>
  );
}