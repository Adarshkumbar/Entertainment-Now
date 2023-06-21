import { memo, useEffect, useState } from 'react';
import BackgroundImage from '../../components/backgroundImage/backgroundImage'
import ContentWrapper from '../../components/contentWrapper/contentWrapper'
import Header from '../../components/header/Header';
import Img from '../../components/lazyLoadImage/Img';
import bg from "../../gifs/spiderman aross.jpg";
import './signup.scss'
import { firebaseAuth } from '../../utils/firebaseConfig'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import MyList from './MyList';
import { useNavigate } from 'react-router-dom';

 function SignUp() {
  const [showPassword , setShowPassword] = useState(false);
  const [formValues , setformValues] = useState({
    email : '',
    password : '',
  })
  useEffect(()=>{
    const handleSignIn = async () => {
      console.log('heelllo');
      // try {
      //   const { email, password } = formValues;
      //   await createUserWithEmailAndPassword(firebaseAuth, email, password);
      // } catch (err) {
      //   console.log(err);
      //   console.log("hello");
      // }
    };
    // onAuthStateChanged(firebaseAuth, (currentUser) => {
    //   if (currentUser) navigate("/");
    // });

  },[])
const navigate = useNavigate()
  
  return (
    <>
    <Header/>
      {/* <Header />
      <MyList login />
      <div className="container" style={{ overflow: "hidden" }}>
        <img
          src={bg}
          alt="no image"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>
      <ContentWrapper>
      <div className="content-nice">
        <div className="signUp">signUp</div>
        <h2>SignUp to Add movies to List</h2>
        <div className="form">
          <input
            type="email"
            placeholder="Email Id "
            name="email"
            value={formValues.email}
            onChange={(e) =>
              setformValues({ ...formValues, [e.target.name]: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={(e) =>
              setformValues({ ...formValues, [e.target.name]: e.target.value })
            }
          />
          <button>Get started</button>
        </div>
        <button onClick={handleSignIn} >Login </button>
      </div>
      </ContentWrapper> */}
    </>
  );
}
export default SignUp; 