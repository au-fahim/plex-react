import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MainWrapper from "../MainWrapper";
import CarouselItem from "./CarouselItem";
import CustomButtonGroup from "../../ui/CustomButtonGroup";


import { movies } from './../../../movie';



export default function MultiCarousel({ title, thums }) {
  return (
    <section>
      <MainWrapper>
        <div className="relative">
          <header className="flex flex-row items-center justify-between mb-2 md:mb-4">
            <a className="text-lg md:text-2xl text-gray-50 font-semibold">
              {title}
            </a>
          </header>

          {/* SLIDER CONTENT */}
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            itemClass="pr-2 md:pr-4 lg:pr-6"
            containerClass="container"
            customButtonGroup={<CustomButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            removeArrowOnDeviceType="mobile"
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 7,
                partialVisibilityGutter: 40,
              },
              laptop: {
                breakpoint: {
                  max: 1024,
                  min: 768,
                },
                items: 6,
                partialVisibilityGutter: 40,
              },
              tablet: {
                breakpoint: {
                  max: 768,
                  min: 464,
                },
                items: 5,
                partialVisibilityGutter: 30,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 3,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={3}
            swipeable
          >
            {movies.map((item, index) => (
              <CarouselItem
                key={index}
                id={index}
                src={item.img}
                alt={item.alt}
              />
            ))}
          </Carousel>
        </div>
      </MainWrapper>
    </section>
  );
}
