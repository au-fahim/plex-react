import ReactPlayer from "react-player/youtube";

export default function VideoPopup({ showVideoPopup, setShowVideoPopup, videoId, setVideoId }) {
  return (
    <div>
      Video Player
      {/* Video Backdrop */}
      <div></div>

      {/* Video Overlay */}
      <div>
        {/* Close Button */}
        <button></button>

        {/* Video Player */}
        <ReactPlayer />
      </div>
    </div>
  );
}