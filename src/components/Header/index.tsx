import React, { Fragment } from "react";
import Logo from '../Logo';
import NavBar from '../NavBar';
import Botao from '../Botao';
import style from './Header.module.scss';
import BotaoPesquisa from '../BotaoPesquisa';

export default function Header() {
    return (
        <div className={style.Header}>
            <div className={style.container}>
                <Logo />
                <NavBar />
            </div>
            <Botao texto={'Login'}/>
            <BotaoPesquisa />
        </div>
    )
}