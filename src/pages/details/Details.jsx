import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Cast from './cast/Cast';
import useFetch from '../../hooks/useFetch';
import DetaislBanner from './details_banner/DetailsBanner';
import VideosSection from './videos_section/VideosSection';
import Recommendation from './recommendation/Recommendation';
import SimilarContents from './similar_contents/SimilarContents';
import VideoPopup from '../../components/layouts/video_popup/VideoPopup';



export default function Details() {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // SHOW VIDEO WITH POPUP MODAL
  const showModal = (id) => {
    setShowVideoPopup(true);
    setVideoId(id);
    document.body.style.overflowY = "hidden";
  };

  // TAKE mediaType & id FROM URL PATH
  const { mediaType, id } = useParams();
  
  const { data: videos, loading: videoLoading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const officialVideo = videos?.results?.find(
    (result) => result?.type === "Trailer"
  );

  return (
    <>
      <DetaislBanner
        video={officialVideo}
        crew={credits?.crew}
        showModal={showModal}
      />

      <div className="flex flex-col gap-4">
        <VideosSection
          videos={videos}
          loading={videoLoading}
          showModal={showModal}
        />
        <Cast castData={credits?.cast} loading={creditsLoading} />
      </div>

      <div className="flex flex-col gap-10 my-10">
        <SimilarContents mediaType={mediaType} id={id} />
        <Recommendation mediaType={mediaType} id={id} />
      </div>

      {/* VIDEO POPUP MODAL */}
      <VideoPopup
        videoId={videoId}
        setVideoId={setVideoId}
        showVideoPopup={showVideoPopup}
        setShowVideoPopup={setShowVideoPopup}
      />
    </>
  );
}