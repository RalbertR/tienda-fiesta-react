import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'

const NavBar = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order')) 

    getDocs(collectionRef).then(response => {

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return { id, ...data}
      })
      setCategories(categoriesAdapted)
    })
  }, [])

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