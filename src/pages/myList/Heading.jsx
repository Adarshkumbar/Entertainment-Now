import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header"
import './heading.scss'
function Heading(props) {
    const navigate = useNavigate();
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
          {props.login ? "Login" : " Sign IN"} 
        </button>
      </div>
    </>
  );
}
export default Heading