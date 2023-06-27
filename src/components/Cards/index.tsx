import style from './Card.module.scss';
import { Link } from 'react-router-dom';

import { ProdutosStarWars } from '../../common/Produtos/ProdutosStarWars';
import { ProdutosConsoles } from '../../common/Produtos/ProdutosConsoles';
import { ProdutosDiversos } from '../../common/Produtos/ProdutosDiversos';

interface Props {
    tipo : string
}

export default function Cards({tipo} : Props) {

    let produtoLista = [{
        imagem : '',
        nome : '',
        preco : ''
    }]

    function tipoProduto() {
        if (tipo === 'Star Wars') { return ProdutosStarWars }
        if (tipo === 'Consoles') { return ProdutosConsoles }
        if (tipo === 'Diversos') { return ProdutosDiversos }
        else { return produtoLista }
    }

    produtoLista = tipoProduto();

    let numero = 0;

    const Cartoes = produtoLista.map((produto, chave) => {
        numero = numero + 1;
        return (
            <div key={chave} className={`cartao cartao__${numero}`}>
                <Link to='/Produto' ><section><img className={style.cardImg} src={produto.imagem} alt="Imagem" /></section></Link>
                <div className={style.cardConteudo}>
                    <h2> {produto.nome} </h2>
                    <p>R$ {produto.preco} </p>
                    <a href="#top"> Ver tudo </a>
                </div>
            </div>
        )});

    return(
       <div className={style.cardsContainers}> {Cartoes} </div>
    )
}

