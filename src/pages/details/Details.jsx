import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./style.scss";

function Details() {
  const { mediaType , id}= useParams();
  const {data,loading} = useFetch(`/${mediaType}/${id}`);
  return <div>Details</div>;
}
export default Details;
