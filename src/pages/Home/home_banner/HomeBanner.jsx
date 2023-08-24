import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// LOCAL FILE IMPORTED
import MainWrapper from "../../../components/layouts/MainWrapper";
import bg from "/bg.jpg";
import useFetch from "../../../hooks/useFetch";


export default function HomeBanner() {
  const [randomBg, setRandomBg] = useState("")
  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    const bg_path =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 19)]?.backdrop_path;
    
    setRandomBg(bg_path)
  }, [data])

  
  return (
    <>
      <section className="home_banner">
        <MainWrapper>
          <div className="home_banner__container">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Go ahead, stream free
            </h1>
            <p className="pb-2 text-gray-400 text-sm md:text-base lg:text-lg">
              With Plex you can watch over 20,000 free movies and shows, plus
              Live TV on almost any device. What are you waiting for?
            </p>
            <button className="btn_md primary_btn">Sign Up</button>
          </div>
        </MainWrapper>

        <div className="w-full lg:w-auto lg:h-full absolute right-0 top-0 -z-30">
          <img src={randomBg} className="h-full" alt="Home Banner Image" />
        </div>
      </section>
    </>
  );
}