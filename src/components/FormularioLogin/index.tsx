import Botao from '../Botao';
import style from './FormularioLogin.module.scss';

export default function FormularioLogin() {
    return (
        <main className={style.main}>
            <div className={style.Container}>
                <h1 className={style.titulo}> Iniciar sessão </h1>
                <form action="submit" className={style.form}>
                    <input className={style.input} type="email" name="email" id="email" placeholder={'Escreva seu email'} />
                    <input  className={style.input} type="text" name="senha" id="senha" placeholder={'Escreva sua senha'} />
                    <Botao texto='Entrar'/>
                </form>
            </div>
        </main>
    )
}
