import { Link } from 'react-router-dom';
import style from './Botao.module.scss';

interface Props {
    texto : string
}

export default function LoginButton({texto} : Props) {
    return(
        <button className={style.Botao}><Link to="/Login" >{texto}</Link></button>
    )
}