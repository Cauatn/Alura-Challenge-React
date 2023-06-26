import { Link } from 'react-router-dom';

import ControleN from '../../assets/img/LogoN/ControleN.png';
import AluraN from '../../assets/img/LogoN/AluraN.png';
import GeekN from '../../assets/img/LogoN/GeekN.png';
import ControleP from '../../assets/img/LogoP/ControleP.png';
import AluraP from '../../assets/img/LogoP/AluraP.png';
import GeekP from '../../assets/img/LogoP/GeekP.png';
import style from './Logo.module.scss';

export default function Logo() {
    return(
        <div className={style.logo}>
            <Link to="/">
                <div className={style.logoN}>
                    <img src={ControleN} alt="imagem logo controle" />
                    <img src={AluraN} alt="imagem logo alura" />
                    <img src={GeekN} alt="imagem logo geek" />
                </div>
                <div className={style.logoP}>
                    <img src={ControleP} alt="imagem logo controle" />
                    <img src={AluraP} alt="imagem logo alura" />
                    <img src={GeekP} alt="imagem logo geek" />
                </div>
            </Link>
        </div>
    )
}