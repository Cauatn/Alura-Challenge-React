import style from './Card.module.scss';
import CardImagem from '../CardImagem';

export default function Card() {
    return(
        <div className={style.card}>
            <CardImagem imagem={'a'}/>
            <div className={style.cardConteudo}>
                <h2>Produto XYZ</h2>
                <p>R$ 60,00</p>
                <a href="#">Ver tudo</a>
            </div>
        </div>
    )
}