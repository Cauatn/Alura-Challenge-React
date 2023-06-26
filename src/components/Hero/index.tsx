import style from './Hero.module.scss';
import Botao from '../LoginButton';
import Banner from '../../assets/img/Banner.png';

export default function Hero() {
    return (
        <div className={style.heroContainer}>
            <div className={style.conteudoHero}>
                <h1 className={style.heroTitulo}>Dezembro Promocional</h1>
                <p>Produtos selecionados com 33% de desconto</p>
                <Botao texto={'Ver consoles'}/>
            </div>
        </div>
    )
}