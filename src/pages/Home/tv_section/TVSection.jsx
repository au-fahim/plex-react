import { useNavigate } from "react-router";

import Carousel from "../../../components/layouts/custom_carousel/Carousel";

export default function TvSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 flex flex-col gap-6 md:gap-10 overflow-hidden">
      <Carousel endpoints={"/tv/popular"} title={"Popular TV Shows"} />
      <Carousel endpoints={"/tv/top_rated"} title={"Top Rated TV Shows"} />

      <div className="flex flex-row justify-center mt-4">
        <button
          onClick={() => navigate("/explore/tv")}
          className="btn_md primary_btn"
        >
          Explore More TV Shows
        </button>
      </div>
    </section>
  );
}
