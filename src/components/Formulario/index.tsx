import React from "react";
import Botao from "../LoginButton";
import style from './Formulario.module.scss';

export default function Formulario() {
    return(
        <div>
            <form
                className={style.Formulario}
                action="">
                    <p 
                        className={style.formularioTitulo}
                    >
                        Fale Conosco
                    </p>
                    <div className={style.inputContainer}>
                        <label htmlFor="nome" className={style.inputNameLabel}>Nome</label>
                        <input
                            id="name"
                            className={style.inputName}
                            type="text"
                        />
                    </div>
                    <textarea
                        className={style.inputMensagem}
                        placeholder='Envie sua mensagem'
                    />
                    <Botao
                        texto={'Enviar mensagem'}
                    />
            </form>
        </div>
    )
}