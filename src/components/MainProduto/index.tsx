import style from './MainProduto.module.scss';
import Secao from '../secao';
import SW1G from '../../assets/img/Star Wars/SW-1G.png'

export default function MainProduto() {
    return (
        <main>
            <div className={style.mainContainer}>
                <div className={style.produto} >
                    <span><img src={SW1G} alt="" /></span>
                    <div className={style.descricaoContainer}>
                        <h1> Produto XYZ </h1>
                        <p className={style.preco}> R$ 60,00 </p>
                        <p> Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam </p>
                    </div>
                </div>
                <Secao tipo='Star Wars'/>
            </div>
        </main>
    )
}