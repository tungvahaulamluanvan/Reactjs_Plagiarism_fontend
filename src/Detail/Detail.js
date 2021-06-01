import DetailTopBar from "./DetailTopBar";
import { useParams } from 'react-router';
import DetailBody from "./DetailBody";
import "./detail.css";

function Detail(){
    const { name } = useParams();
    
    return(
        <div>
        <DetailTopBar></DetailTopBar>
        <DetailBody></DetailBody>
        </div>
    )
}
export default Detail;