import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
export default function MyList() {
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/");
  });
  return (
    <>
      <h1>Tis the damn season</h1>
      <button onClick={()=> navigate("/")}>Go Home </button>
      <button style={{background:"red"}} onClick={()=>signOut(firebaseAuth)}>SIGN OUT</button>
    </>
  );
}