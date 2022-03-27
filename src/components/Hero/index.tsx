import style from './Hero.module.scss';
import Botao from '../Botao';
import Banner from '../../assets/img/Banner.png';


export default function Hero() {
    return (
        <div className={style.heroContainer}>
            <img className={style.bannerImg} src={Banner} alt="banner"></img>
            <div className={style.conteudoHero}>
                <h1 className={style.heroTitulo}>Dezembro Promocional</h1>
                <p>Produtos selecionados com 33% de desconto</p>
                <Botao texto={'Ver consoles'}/>
            </div>
        </div>
    )
}