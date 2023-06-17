import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";

export default function MyList(props) {
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <button onClick={()=> navigate(props.login ? '/login' : '/signup')}> {props.login ? 'Login ' : 'Sign Up'}</button>
    </ContentWrapper>
  );
}