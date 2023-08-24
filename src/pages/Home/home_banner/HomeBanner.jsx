import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// LOCAL FILE IMPORTED
import MainWrapper from "../../../components/layouts/MainWrapper";
import bg from "/bg.jpg";
import useFetch from "../../../hooks/useFetch";


export default function HomeBanner() {
  const [randomBg, setRandomBg] = useState("")
  const [randomVideo, setRandomVideo] = useState(null)
  
  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 19)
    
    const randomOne = data?.results?.[randomNum]
    const bg_path =
      url?.backdrop_w780 + data?.results?.[randomNum]?.backdrop_path;
    
    console.log(randomOne);
    setRandomBg(bg_path)
    setRandomVideo(randomOne)
  }, [data])

  
  return (
    <>
      <section className="home_banner">
        <MainWrapper>
          <div className="home_banner__container">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold line-clamp-2">
              {randomVideo?.title}
            </h1>
            <p className="pb-2 text-gray-400 text-sm md:text-base lg:text-lg line-clamp-3">
              {randomVideo?.overview}
            </p>
            <button className="btn_md primary_btn">Watch Trailor</button>
          </div>
        </MainWrapper>

        <div className="w-full lg:w-auto lg:h-full absolute right-0 top-0 -z-30">
          {!loading && (
            <img src={randomBg} className="h-full" alt="Home Banner Image" />
          )}
        </div>
      </section>
    </>
  );
}