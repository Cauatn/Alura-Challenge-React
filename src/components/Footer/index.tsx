import style from './Footer.module.scss';

export default function Footer() {
    return(
        <footer className={style.footer}>
            <div className={style.primeiroContainer}>
                <div className={style.containerConteudo}></div>
            </div>
            <div className={style.segundoContainer}>
                <p>Desenvolvido por Cauã Tavares<br></br>2022</p>
            </div>
        </footer>
    )
}