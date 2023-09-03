import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetaislBanner from './details_banner/DetailsBanner';
import Cast from './cast/Cast';
import SimilarContents from './similar_contents/SimilarContents';
import Recommendation from './recommendation/Recommendation';

export default function Details() {
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
      <DetaislBanner video={officialVideo} crew={credits?.crew} />
      <Cast castData={credits?.cast} loading={creditsLoading} />
      <br />
      <SimilarContents mediaType={mediaType} id={id} />
      <br />
      <Recommendation mediaType={mediaType} id={id} />
    </>
  );
}