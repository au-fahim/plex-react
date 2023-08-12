import MainWrapper from "./MainWrapper";
import bg from "/bg.jpg"

export default function HomeBanner() {
  return (
    <section className="home_banner">
      <MainWrapper>
        <div className="home_banner__container">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Go ahead, stream free
          </h1>
          <p className="pb-2 text-gray-400 text-sm md:text-base lg:text-lg">
            With Plex you can watch over 20,000 free movies and shows, plus Live
            TV on almost any device. What are you waiting for?
          </p>
          <button className="btn_md primary_btn">Sign Up</button>
        </div>
      </MainWrapper>

      <div className="w-full lg:w-auto lg:h-full absolute right-0 top-0 -z-30">
        <img src={bg} className="h-full" alt="Home Banner Image" />
      </div>
    </section>
  );
}