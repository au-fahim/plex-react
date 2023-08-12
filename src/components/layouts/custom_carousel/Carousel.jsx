import MainWrapper from "../MainWrapper";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Carousel({ children, title, ScrollCoverBg }) {
  return (
    <>
      <MainWrapper>
        <div className="overflow-hidden relative group">
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
          <main className="carousel_contents">{children}</main>

          {/* SCROLL BAR COVER */}
          <div
            className={`${ScrollCoverBg} bg-black absolute h-2 w-full bottom-0 left-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-z-50`}
          />
        </div>
      </MainWrapper>
    </>
  );
}