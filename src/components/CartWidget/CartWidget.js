import carrito from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (

        <button class="btn btn-primary" type="button"><img src={carrito} alt='cart'/>3</button>
    )
}

export default CartWidget