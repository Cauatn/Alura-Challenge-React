import './Login.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainLogin from '../../components/MainLogin';

function Login() {

  return (
    <div className="Login">
      <Header/>
      <MainLogin />
      <Footer/>
    </div>
  );
}

export default Login;