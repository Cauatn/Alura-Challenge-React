import React from "react";
import style from './ListaLink.module.scss';

export default function ListaLink() {
    return (
        <div>
            <ul className={style.lista}>
                <li className={style.listaItem}><a href="#">Quem somos nós</a></li>
                <li className={style.listaItem}><a href="#">Política de privacidade</a></li>
                <li className={style.listaItem}><a href="#">Programa fidelidade</a></li>
                <li className={style.listaItem}><a href="#">Nossas lojas</a></li>
                <li className={style.listaItem}><a href="#">Quero ser franqueado</a></li>
                <li className={style.listaItem}><a href="#">Anuncie aqui</a></li>
            </ul>
        </div>
    )
}