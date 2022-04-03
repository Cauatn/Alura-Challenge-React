import './Login.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FormularioLogin from '../../components/FormularioLogin';

function Login() {

  return (
    <div className="Login">
      <Header/>
      <FormularioLogin />
      <Footer/>
    </div>
  );
}

export default Login;