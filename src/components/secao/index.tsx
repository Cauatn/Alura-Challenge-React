import style from './secao.module.scss';
import Cards from '../Cards';

export default function Secao({tipo} : {tipo : string}) {

    return (
        <section className={style.secao}>
            <div className={style.mainHeader}>
                <h1 className={style.mainHeaderTitulo}>Star Wars</h1>
                <div className={style.verTudo}>
                    <p><a href="#">Ver tudo</a></p>
                    <button className={style.botaoSeta}></button>
                </div>
            </div>
            <Cards tipo={tipo}/>
        </section>
    )
}