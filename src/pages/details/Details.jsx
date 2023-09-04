import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cast from './cast/Cast';
import useFetch from '../../hooks/useFetch';
import DetaislBanner from './details_banner/DetailsBanner';
import VideosSection from './videos_section/VideosSection';
import Recommendation from './recommendation/Recommendation';
import SimilarContents from './similar_contents/SimilarContents';
import VideoPopup from '../../components/layouts/video_popup/VideoPopup';

export default function Details() {
  const { mediaType, id } = useParams();
  
  const { data: videos, loading: videoLoading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const officialVideo = videos?.results?.find(
    (result) => result?.type === "Trailer"
  );

  const { showVideoPopup, videoId } = useSelector((state) => state.videoPopup);

  

  return (
    <>
      <DetaislBanner video={officialVideo} crew={credits?.crew} />
      <VideosSection videos={videos} loading={videoLoading} />
      <br />
      <Cast castData={credits?.cast} loading={creditsLoading} />
      <br />
      <SimilarContents mediaType={mediaType} id={id} />
      <br />
      <Recommendation mediaType={mediaType} id={id} />

      {/* Show Video Popup Modal */}
      <VideoPopup showVideoPopup={showVideoPopup} videoId={videoId} />
    </>
  );
}