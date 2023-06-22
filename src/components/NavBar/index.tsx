import Lupa from '../../assets/img/Lupa.png';
import style from './NavBar.module.scss';


export default function NavBar() {
    return(
        <form className={style.formulario} action="">
            <input className={style.input} type="text" placeholder='O que você deseja proucurar'/>
            <button ><img src={Lupa} alt="" /></button>
        </form>
    )
}