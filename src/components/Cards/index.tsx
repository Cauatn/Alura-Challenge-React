import style from './Card.module.scss';

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
        if (tipo == 'StarWars') { return ProdutosStarWars }
        if (tipo == 'Consoles') { return ProdutosConsoles }
        if (tipo == 'Diversos') { return ProdutosDiversos }
        else { return produtoLista }
    }

    produtoLista = tipoProduto();

    const produtoItens = produtoLista.map((produto, chave) => {
        return (
            <div key={chave}>
                <section><img className={style.cardImg} src={produto.imagem} alt="Imagem" /></section>
                <div className={style.cardConteudo}>
                    <h2> {produto.nome} </h2>
                    <p>R$ {produto.preco} </p>
                    <a href="#"> Ver tudo </a>
                </div>
            </div>
        )});

    return(
        <div className={style.card}> {produtoItens} </div>
    )
}

