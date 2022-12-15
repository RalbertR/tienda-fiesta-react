import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
      <NavLink to='/'>
          <h3>Tienda de Comidas</h3>
      </NavLink>

        <div className="Categories">
            <NavLink to={'/category/hamburguesa'} className={({ isActive}) => isActive ? 'Activo' : 'Inactivo'}>Hamburguesas</NavLink>
            <NavLink to={'/category/pizza'} className={({ isActive}) => isActive ? 'Activo' : 'Inactivo'}>Pizzas</NavLink>
            <NavLink to={'/category/gaseosa'} className={({ isActive}) => isActive ? 'Activo' : 'Inactivo'}>Gaseosas</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar