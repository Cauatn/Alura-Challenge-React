import style from './CardImagem.module.scss';


interface Props {
    imagem : string
}

export default function CardImagem( {imagem} : Props) {
    return (
        <section><img className={style.cardImg} src={imagem} alt="" /></section>
    )
}