import { useEffect, useState } from "react";
import Carousel from "../../../components/layouts/custom_carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/ui/Img";

export default function MoviePlayCard() {
  const [randomBg, setRandomBg] = useState(null)
  const { data, loading } = useFetch("/trending/movie/week");
  const { url } = useSelector((state) => state.home)
  
  useEffect(() => {
    const bg_path =
      url?.backdrop_w1280 +
      data?.results?.[0]?.backdrop_path;
    
    setRandomBg(bg_path)
  }, [data])

  const getBgPath = (path) => {
    const bg_path = url?.backdrop_w1280 + path;

    setRandomBg(bg_path);
  }

  return (
    <section className="py-16 flex flex-col gap-6 md:gap-10 relative overflow-hidden bg-black/70">
      <Carousel
        endpoints={"/trending/movie/week"}
        title={"Featured Movies"}
        videoPlayableCard={true}
        getBgPath={getBgPath}
      />

      {!loading && (
        <div
          className="absolute w-full top-0 left-0 h-full -z-30 bg-center bg-cover bg-no-repeat duration-300 ease-out"
          style={{backgroundImage: `url(${randomBg})`}}
        />
      )}
    </section>
  );
}
