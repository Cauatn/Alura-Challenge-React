import style from './Botao.module.scss';

interface Props {
    texto : string
}

export default function Botao({texto} : Props) {
    return(
        <button className={style.Botao}>{texto}</button>
    )
}