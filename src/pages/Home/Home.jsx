import HomeBanner from "./home_banner/HomeBanner";
import Carousel from "../../components/layouts/custom_carousel/Carousel";
import useFetch from "../../hooks/useFetch";


const thumb = [
  { img: "/card_bg/1.avif", alt: "TV Show 1" },
  { img: "/card_bg/2.avif", alt: "TV Show 2" },
  { img: "/card_bg/3.avif", alt: "TV Show 3" },
  { img: "/card_bg/4.avif", alt: "TV Show 4" },
  { img: "/card_bg/5.avif", alt: "TV Show 5" },
  { img: "/card_bg/1.avif", alt: "TV Show 1" },
  { img: "/card_bg/2.avif", alt: "TV Show 2" },
  { img: "/card_bg/3.avif", alt: "TV Show 3" },
  { img: "/card_bg/4.avif", alt: "TV Show 4" },
  { img: "/card_bg/5.avif", alt: "TV Show 5" },
]
import { movies } from "../../movie";

import MovieSection from "./movie_tv_section/MovieSection";
import TvSection from "./tv_section/TVSection";
import MoviePlayCard from "./movie_play_cards/MoviePlayCard";


export default function Home() {  

  return (
    <>
      <HomeBanner />
      <main>
        {/* Movie Related Carousels */}
        <MovieSection />

        {/* Playable Movie Card Carousel */}
        <MoviePlayCard />

        {/* TV Shows Related Carousels */}
        <TvSection />
      </main>
    </>
  );
}