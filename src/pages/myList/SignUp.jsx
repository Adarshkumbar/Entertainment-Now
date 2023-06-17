import { useState } from 'react';
import BackgroundImage from '../../components/backgroundImage/backgroundImage'
import ContentWrapper from '../../components/contentWrapper/contentWrapper'
import Header from '../../components/header/Header';
import Img from '../../components/lazyLoadImage/Img';
import bg from "../../gifs/spiderman aross.jpg";
import './signup.scss'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import MyList from './MyList';
export default function SignUp() {
  const [showPassword , setShowPassword] = useState(false);
  const [formValues , setformValues] = useState({
    email : '',
    password : '',
  })

  const handleSignIn = async () =>{
    try {
      const {email ,password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }catch(err) {
      console.log(err);
    }
  }
  return (
    <>
      <Header />
      <MyList login />
      <div className="container" style={{overflow:'hidden'}}>
        <img
          src={bg}
          alt="no image"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>
      {/* <ContentWrapper> */}
        <div className="content-nice">
          <div className="sinUp">signUp</div>
          <h2>SignUp to Add movies to List</h2>
          <div className="form">
            <input type="email" placeholder="Email Id " name="email" />
            <input type="password" placeholder="Password" name="password" />
           
             <button >Get started</button>
      
          </div>
          <button className='login_btn'>Login</button>
        </div>
      {/* </ContentWrapper> */}
    </>
  );
}