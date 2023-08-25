import { useNavigate } from "react-router";

import Carousel from "../../../components/layouts/custom_carousel/Carousel";


export default function MovieSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 flex flex-col gap-6 md:gap-10 overflow-hidden">
      <Carousel endpoints={"/movie/popular"} title={"Popular Movies"} />
      <Carousel endpoints={"/movie/upcoming"} title={"Upcoming Movies"} />
      <Carousel endpoints={"/movie/top_rated"} title={"Top Rated Movies"} />

      <div className="flex flex-row justify-center mt-4">
        <button
          onClick={() => navigate("/explore/movie")}
          className="btn_md primary_btn"
        >
          Explore More Movies
        </button>
      </div>
    </section>
  );
}