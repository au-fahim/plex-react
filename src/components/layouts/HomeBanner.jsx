import MainWrapper from "./MainWrapper";
import bg from "/bg.jpg"

export default function HomeBanner() {
  return (
    <section className="h-[80vh] overflow-hidden relative bg-gradient-to-t lg:bg-gradient-to-r from-black from-50% sm:from-30% md:from-10% via-black/80 to-transparent">
      <MainWrapper>
        <div className="w-11/12 md:max-w-lg flex flex-col items-center text-center lg:text-left lg:items-start gap-6 absolute left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 top-1/2 -translate-y-1/4 lg:-translate-y-1/2 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">Go ahead, stream free</h1>
          <p className="pb-2 text-gray-400 text-sm md:text-base lg:text-lg">
            With Plex you can watch over 20,000 free movies and shows, plus Live TV on almost any device. What are you waiting for?
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