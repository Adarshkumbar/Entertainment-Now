import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";

function Details() {
  // Below useStates are used for Api calls to get videos, cast 
  const { mediaType , id} = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`); // api call for videos 
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`); // api call for credits i.e caste and director
  return <div>
    <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    {/* <Cast data={credits?.cast} loading={creditsLoading}/> */}
    <VideosSection data = {data} loading={loading} />
  </div>;
}
export default Details;
