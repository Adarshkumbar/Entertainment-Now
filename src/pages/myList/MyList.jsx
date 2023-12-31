import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
export default function MyList() {
  const navigate = useNavigate();

  function sign_Out() {
    signOut;
    navigate("/")
  }
  return (
    <>
      <h1>Tis the damn season</h1>
      <button onClick={()=> navigate("/")}>Go Home </button>
      <button style={{background:"red"}} onClick={sign_Out}>SIGN OUT</button>
    </>
  );
}