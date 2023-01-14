import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext) 
    const navigate = useNavigate()
    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </div>
    );
}

export default CartWidget