import MultiCarousel from "../../components/layouts/Carousels/MultiCarousel";
import Header from "../../components/layouts/Header";
import HomeBanner from "../../components/layouts/HomeBanner";
import Carousel from "../../components/layouts/custom_carousel/Carousel";
import Img from "../../components/ui/Img";


const thumb = [
  { img: "/card_bg/1.avif", name: "TV Show 1" },
  { img: "/card_bg/2.avif", name: "TV Show 2" },
  { img: "/card_bg/3.avif", name: "TV Show 3" },
  { img: "/card_bg/4.avif", name: "TV Show 4" },
  { img: "/card_bg/5.avif", name: "TV Show 5" },
  { img: "/card_bg/1.avif", name: "TV Show 1" },
  { img: "/card_bg/2.avif", name: "TV Show 2" },
  { img: "/card_bg/3.avif", name: "TV Show 3" },
  { img: "/card_bg/4.avif", name: "TV Show 4" },
  { img: "/card_bg/5.avif", name: "TV Show 5" },
]

import { movies } from "../../movie";


export default function Home() {
  return (
    <>
      <HomeBanner />
      <main>
        <section className="py-16 flex flex-col gap-6 md:gap-10">
          <Carousel title="Binge-Worthy Shows" ScrollCoverBg="bg-[#191919]">
            {movies.map((item, index) => (
              <div
                key={index}
                className="w-2/12 flex-shrink-0 bg-cover bg-center rounded-md mb-2"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <Img src={item.img} alt={item.name} className="invisible" />
              </div>
            ))}
          </Carousel>

          <Carousel title="Trending in Singapore" ScrollCoverBg="bg-[#191919]">
            {movies.map((item, index) => (
              <div
                key={index}
                className="w-2/12 flex-shrink-0 bg-cover bg-center rounded-md mb-2"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <Img src={item.img} alt={item.name} className="invisible" />
              </div>
            ))}
          </Carousel>

          <Carousel title="Based On a True Story" ScrollCoverBg="bg-[#191919]">
            {movies.map((item, index) => (
              <div
                key={index}
                className="w-2/12 flex-shrink-0 bg-cover bg-center rounded-md mb-2"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <Img src={item.img} alt={item.name} className="invisible" />
              </div>
            ))}
          </Carousel>

          {/* <MultiCarousel title="Binge-Worthy Shows" />
          <MultiCarousel title="Trending in Singapore" />
          <MultiCarousel title="Based On a True Story" /> */}

          <div className="flex flex-row justify-center mt-4">
            <button className="btn_md primary_btn">Explore More Movies</button>
          </div>
        </section>

        <section className="bg-black/70 py-16 flex flex-col gap-6 md:gap-10">
          <Carousel title="Featured TV Shows" ScrollCoverBg="bg-[#070707]">
            {thumb.map((item, index) => (
              <div
                key={index}
                className="w-1/5 flex-shrink-0 bg-cover bg-center rounded-md mb-2"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <Img src={item.img} alt={item.name} className="invisible" />
              </div>
            ))}
          </Carousel>

          <div className="flex flex-row justify-center mt-4">
            <button className="btn_md primary_btn">
              Explore More TV Shows
            </button>
          </div>
        </section>
      </main>
    </>
  );
}