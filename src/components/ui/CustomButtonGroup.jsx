import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className="hidden md:flex flex-row gap-3 md:gap-6 absolute top-0 right-0">
      <button
        className={`icon_btn ${currentSlide === 0 ? "disable" : ""}`}
        onClick={() => previous()}
      >
        <HiChevronLeft size={22} />
      </button>

      <button className="icon_btn" onClick={() => next()}>
        <HiChevronRight size={22} />
      </button>
    </div>
  );
};

export default CustomButtonGroup;
