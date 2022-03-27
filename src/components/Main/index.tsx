import style from './Index.module.scss';
import Card from '../Card';


interface Props {
    imagem : string
}

export default function Main() {
    return (
        <main>
            <div className={style.mainContainer}>
                <section>
                    <div className={style.mainHeader}>
                        <h1 className={style.mainHeaderTitulo}>Star Wars</h1>
                        <div className={style.verTudo}>
                            <p><a href="#">Ver tudo</a></p>
                            <button className={style.botaoSeta}></button>
                        </div>
                    </div>
                    <Card />
                </section>
            </div>
        </main>
    )
}