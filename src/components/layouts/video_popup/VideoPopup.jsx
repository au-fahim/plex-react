import ReactPlayer from "react-player/youtube";

export default function VideoPopup({ showVideoPopup, setShowVideoPopup, videoId, setVideoId }) {

  const closePopupModal = () => {
    setVideoId(null)
    setShowVideoPopup(false)
    document.body.style.overflowY = "auto";
  }

  return (
    <>
      {/* Video Backdrop */}
      <div
        onClick={closePopupModal}
        className={`${
          showVideoPopup ? "fixed" : "hidden"
        } w-full top-0 left-0 h-screen bg-black/90 z-50 flex items-center justify-center`}
      >
        {/* Video Overlay */}
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full md:w-[720px] xl:w-[900px] mx-4 aspect-video px-4 text-white rounded-md relative"
        >
          {/* Close Button */}
          <button
            className="absolute right-2 -top-9 hover:underline"
            onClick={closePopupModal}
          >
            CLOSE
          </button>
          {/* Video Player */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            playing={false}
          />
        </div>
      </div>
    </>
  );
}