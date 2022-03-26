import Formulario from '../Formulario';
import ListaLink from '../ListaLink';
import Logo from '../Logo';
import style from './Footer.module.scss';

export default function Footer() {
    return(
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.primeiroContainer}>
                    <Logo/>
                    <ListaLink />
                    <Formulario />
                </div>
                <div className={style.segundoContainer}>
                        <p >Desenvolvido por Cauã Tavares</p>
                        <p>2022</p>
                </div>
            </div>
        </footer>
    )
}