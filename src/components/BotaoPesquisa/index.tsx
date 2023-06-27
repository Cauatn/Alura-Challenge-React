import { Link } from 'react-router-dom';
import style from './Botao.module.scss';

interface Props {
    texto : string
}

export default function LoginButton({texto} : Props) {
    return(
        <Link to="/Login" ><button className={style.Botao}>{texto}</button></Link>
    )
}
