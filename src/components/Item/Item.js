import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price }) => {

    return (
        <article className="card">
            <header className="titulo">
                <h2 className="tituloItem">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="imagen"/>
            </picture>
            <section>
                <p className="precio">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='detalle'>
               <Link to={`/detail/${id}`}>Mas información</Link>
            </footer>
        </article>
    )
}

export default Item