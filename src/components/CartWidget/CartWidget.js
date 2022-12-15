import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = () => {

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {0}
        </div>
    );
}

export default CartWidget