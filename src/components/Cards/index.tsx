import style from './Card.module.scss';

import SW1 from '../../assets/img/Star Wars/SW-1.png';
import SW2 from '../../assets/img/Star Wars/SW-2.png';
import SW3 from '../../assets/img/Star Wars/SW-3.png';
import SW4 from '../../assets/img/Star Wars/SW-4.png';
import SW5 from '../../assets/img/Star Wars/SW-5.png';
import SW6 from '../../assets/img/Star Wars/SW-6.png';


export default function Cards() {

    const produtos = [{
        imagem : SW1,
        nome : 'Produto XYZ',
        preco: '50,00'
    },{
        imagem: SW2,
        nome : 'Produto XYZ',
        preco: '50,00'
    },{
        imagem: SW3,
        nome : 'Produto XYZ',
        preco: '50,00'
    },{
        imagem: SW4,
        nome : 'Produto XYZ',
        preco: '50,00'
    },{
        imagem: SW5,
        nome : 'Produto XYZ',
        preco: '50,00'
    },{
        imagem: SW6,
        nome : 'Produto XYZ',
        preco: '50,00'
    }];

    const produto = produtos.map((produto, chave) => {
        return (
            <div key={chave}>
                <section><img className={style.cardImg} src={produto.imagem} alt="" /></section>
                <div className={style.cardConteudo}>
                    <h2> {produto.nome} </h2>
                    <p>R$ {produto.preco} </p>
                    <a href="#"> Ver tudo </a>
                </div>
            </div>
        )});

    return(
        <div className={style.card}> {produto} </div>
    )
}

