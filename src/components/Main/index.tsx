import style from './Main.module.scss';
import Cards from '../Cards';
import Secao from '../secao';


export default function Main() {
    return (
        <main>
            <div className={style.mainContainer}>
                <Secao />
            </div>
        </main>
    )
}