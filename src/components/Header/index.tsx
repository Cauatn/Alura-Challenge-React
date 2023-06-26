import Logo from '../Logo';
import NavBar from '../NavBar';
import LoginButton from '../LoginButton';
import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.Header}>
            <div className={style.container}>
                <Logo />
                <NavBar />
            </div>
            <LoginButton texto={'Login'}/>
        </header>
    )
}