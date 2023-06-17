import BackgroundImage from '../../components/backgroundImage/backgroundImage'
import ContentWrapper from '../../components/contentWrapper/contentWrapper'
import Header from '../../components/header/Header';
export default function SignUp() {
  return (
    <ContentWrapper>
        <BackgroundImage />
        <Header />
      <div className='signUp'>signUp</div>
        <h2>SignUp to Add movies to List</h2>
        <div className="form">
            <input type='email' placeholder='Email Id 'name='email' />
            <input type='password' placeholder='Password' name='password' />
            <button>Get started</button>
        </div>
        <button>Login</button>
    </ContentWrapper>
  );
}