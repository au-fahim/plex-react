import MultiCarousel from "../../components/layouts/Carousels/MultiCarousel";
import Header from "../../components/layouts/Header";
import HomeBanner from "../../components/layouts/HomeBanner";
import MainWrapper from "../../components/layouts/MainWrapper";
import Carousel from "../../components/layouts/custom_carousel/Carousel";


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


export default function Home() {
  return (
    <>
      <HomeBanner />
      <main>
        <section className="py-16 flex flex-col gap-6 md:gap-10">
          <Carousel
            data={movies}
            title="Binge-Worthy Shows"
            ScrollCoverBg="bg-[#191919]"
          />

          <Carousel
            data={movies}
            title="Trending in Singapore"
            ScrollCoverBg="bg-[#191919]"
          />

          <Carousel
            data={movies}
            title="Based On a True Story"
            ScrollCoverBg="bg-[#191919]"
          />

          {/* <MultiCarousel title="Binge-Worthy Shows" />
          <MultiCarousel title="Trending in Singapore" />
          <MultiCarousel title="Based On a True Story" /> */}

          <div className="flex flex-row justify-center mt-4">
            <button className="btn_md primary_btn">Explore More Movies</button>
          </div>
        </section>

        <section className="bg-black/70 py-16 flex flex-col gap-6 md:gap-10">
          <Carousel
            data={thumb}
            title="Featured TV Shows"
            ScrollCoverBg="bg-[#070707]"
            landscapeCard={true}
          />

          <div className="flex flex-row justify-center mt-4">
            <button className="btn_md primary_btn">
              Explore More TV Shows
            </button>
          </div>
        </section>

        <section className="py-16 flex flex-col gap-6 md:gap-10">
          <Carousel
            data={movies}
            title="Binge-Worthy Shows"
            ScrollCoverBg="bg-[#191919]"
          />

          <Carousel
            data={movies}
            title="Trending in Singapore"
            ScrollCoverBg="bg-[#191919]"
          />

          <Carousel
            data={movies}
            title="Based On a True Story"
            ScrollCoverBg="bg-[#191919]"
          />

          {/* <MultiCarousel title="Binge-Worthy Shows" />
          <MultiCarousel title="Trending in Singapore" />
          <MultiCarousel title="Based On a True Story" /> */}

          <div className="flex flex-row justify-center mt-4">
            <button className="btn_md primary_btn">Explore More Movies</button>
          </div>
        </section>
      </main>
    </>
  );
}