import Controle from '../../assets/img/LogoN/ControleN.png';

import Alura from '../../assets/img/LogoN/AluraN.png';

import Geek from '../../assets/img/LogoN/GeekN.png';

import style from './Logo.module.scss';

export default function Logo() {
    return(
        <div className={style.logo}>
           <img src={Controle} alt="imagem logo controle" />
           <img src={Alura} alt="imagem logo alura" />
           <img src={Geek} alt="imagem logo geek" />
        </div>
    )
}