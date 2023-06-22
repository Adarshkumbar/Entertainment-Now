import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import SignUp from "./SignUp";

export default function MyList(props) {
  const navigate = useNavigate();
  console.log('running once ?');
  return (
    <>
      <SignUp />
    </>
    // <ContentWrapper>
    //   <button onClick={()=> navigate(props.login ? '/login' : '/signup')}> {props.login ? 'Login ' : 'Sign Up'}</button>
    // </ContentWrapper>
  );
}