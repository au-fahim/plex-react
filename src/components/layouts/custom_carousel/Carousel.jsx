import MainWrapper from "../MainWrapper";

import { HiChevronLeft, HiChevronRight, HiPlay } from "react-icons/hi2";
import Img from './../../ui/Img';
// import { PlayBtn } from "../../ui/PlayBtn";

export default function Carousel(prop) {
  const { data, title, ScrollCoverBg, landscapeCard } = prop;

  return (
    <>
      <MainWrapper>
        <div className="overflow-hidden relative group w-full">
          {/* CAROUSEL HEADER SECTION */}
          <header className="carousel_header">
            <h1 className="carousel_title">{title}</h1>

            {/* CAROUSEL LEFT & RIGHT MOVE CONTROLLER */}
            <div className="carousel_controller">
              <button className="icon_btn">
                <HiChevronLeft size={22} />
              </button>
              <button className="icon_btn">
                <HiChevronRight size={22} />
              </button>
            </div>
          </header>

          {/* CAROUSEL ITEMS CONTAINER */}
          <section className="carousel_contents">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`carousel_item group/card ${
                    landscapeCard
                      ? "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative hover:scale-95 hover:bg-black"
                      : "w-2/5 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-44 "
                  }`}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <Img src={item.img} alt={item.alt} className="invisible" />

                  {landscapeCard && (
                    <HiPlay size={56} className="cart_playbtn" />
                  )}
                </div>
              );
            })}
          </section>

          {/* SCROLL BAR COVER */}
          <div
            className={`${
              ScrollCoverBg || "bg-transparent"
            } absolute h-2 w-full bottom-0 left-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-z-50`}
          />
        </div>
      </MainWrapper>
    </>
  );
}