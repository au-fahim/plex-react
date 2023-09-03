import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// LOCAL FILE IMPORTED
import MainWrapper from "../../../components/layouts/MainWrapper";
import bg from "/bg.jpg";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/ui/Img";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Spinner from "../../../components/ui/Spinner";
import { HiPlay } from "react-icons/hi2";


export default function HomeBanner() {
  const [randomBg, setRandomBg] = useState(null)
  const [randomVideo, setRandomVideo] = useState(null)
  
  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 19)
    
    const randomOne = data?.results?.[randomNum]
    const bg_path =
      url?.backdrop_w1280 + data?.results?.[randomNum]?.backdrop_path;
    
    console.log(randomOne);
    setRandomBg(bg_path)
    setRandomVideo(randomOne)
  }, [data])

  
  return (
    <>
      <section className="home_banner">
        <MainWrapper>
          <div className="home_banner__container">
            {loading ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#fff">
                <div className="w-5/6 md:w-80 lg:w-96 animate-pulse duration-0 delay-0">
                  <Skeleton height={40} />
                </div>
              </SkeletonTheme>
            ) : (
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold line-clamp-2 md:leading-snug lg:leading-snug 2xl:leading-snug"
                title={randomVideo?.title}
              >
                {randomVideo?.title}
              </h1>
            )}

            {loading ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#fff">
                <div className="flex flex-col gap-2 w-11/12 md:w-[560px] animate-pulse duration-150 delay-150">
                  <Skeleton count={3} />
                </div>
              </SkeletonTheme>
            ) : (
              <p
                className="mb-4 text-gray-400 text-sm md:text-base lg:text-lg 2xl:text-xl leading-normal line-clamp-3"
                title={randomVideo?.overview}
              >
                {randomVideo?.overview}
              </p>
            )}

            {loading ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#fff">
                <div className="w-32 md:w-48 animate-pulse duration-0 delay-0">
                  <Skeleton height={40} />
                </div>
              </SkeletonTheme>
            ) : (
              <button className="btn_md primary_btn flex flex-row items-center gap-2">
                <HiPlay /> Watch Now
              </button>
            )}
          </div>
        </MainWrapper>

        {!loading ? (
          <div
            className="bgBannerImg"
            style={{ backgroundImage: `url(${randomBg})` }}
          />
        ) : (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </section>
    </>
  );
}