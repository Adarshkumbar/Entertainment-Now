import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";


function LoadingReact() {
  
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#8b13b0");
 return (
   <div className="sweet-loading" style={{ position: "fixed",
left: "50%",
top: "50%",
transform: "translate(-50% , -50%)"}}>
     <HashLoader
       color={color}
       loading={loading}
       size={150}
    //    aria-label="Loading Spinner"
    //    data-testid="loader"
     />
   </div>
 );
}
export default LoadingReact;

