import TvSection from "./tv_section/TVSection";
import HomeBanner from "./home_banner/HomeBanner";
import MovieSection from "./movie_tv_section/MovieSection";
import MoviePlayCard from "./movie_play_cards/MoviePlayCard";
import { useSelector } from "react-redux";
import VideoPopup from "../../components/layouts/video_popup/VideoPopup";


export default function Home() {
  const { showVideoPopup, videoId } = useSelector((state) => state.videoPopup);

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

      {/* Show Video Popup Modal */}
      <VideoPopup showVideoPopup={showVideoPopup} videoId={videoId} />
    </>
  );
}