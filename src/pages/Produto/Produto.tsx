import './Produto.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainProduto from '../../components/MainProduto';

function Produto() {

  return (
    <div className="Produto">
      <Header/>
      <MainProduto />
      <Footer/>
    </div>
  );
}

export default Produto;
