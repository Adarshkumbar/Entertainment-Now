import { memo, useEffect, useState } from "react";
import BackgroundImage from "../../components/backgroundImage/backgroundImage";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import Header from "../../components/header/Header";
import Img from "../../components/lazyLoadImage/Img";
import bg from "../../gifs/spiderman aross.jpg";
import csm from "../../gifs/csm power.gif";
import "./signup.scss";
import { firebaseAuth } from "../../utils/firebaseConfig";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import MyList from "./MyList";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";

function Login() {
  console.log("Login Component");
  const [showPassword, setShowPassword] = useState(false);
  // below state is for maintaining the values
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
  });
  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
      // console.log("hello");
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/mylist");
  });

  const navigate = useNavigate();

  return (
    <div className="content-nice">
      {/* <MyList login /> */}
      <div className="container" style={{ overflow: "hidden" }}>
        <img
          src={csm}
        />
      </div>
      <div className="content">
        <Heading signin />
        <button style={{background:"red",width:"100px" , height:"30px"}}  onClick={()=>navigate("/")}>Go HOME</button>
        <div className="signUp">Login</div>
        <h2>Login to Add movies to List</h2>
        
        <div className="forForm">
          <div className="form">
            <input
              type="email"
              placeholder="Email Id "
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={(e) =>
                setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button onClick={handleLogIn}>Login </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login ;
