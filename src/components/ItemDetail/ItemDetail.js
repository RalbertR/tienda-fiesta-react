import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addItem, isInCart, getProductQuantity } = useCart()
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,
            name,
            price
        }
        addItem(productToAdd, quantity)
        setNotification('success', `Felicidaes! Se agrego exitosamente ${quantity} ${name}`)
    }
    const quantityAdded = getProductQuantity(id)

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
                { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                    {
                        isInCart(id) && <Link to='/cart' className='Option' style={{ backgroundColor: 'blue'}}>Finalizar compra</Link>
                    }
            </footer>
        </article>
    )
}

export default ItemDetail