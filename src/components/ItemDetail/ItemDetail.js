import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

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
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="info">
                    Descripción: {description}
                </p>
                <p className="precio">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='detalle'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetail