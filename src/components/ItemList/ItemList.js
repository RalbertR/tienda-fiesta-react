import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products, setPage }) => {
    return(
        <div className='lista'>
            {products.map(prod => <Item key={prod.id} {...prod} setPage={setPage}/>)}
        </div>    
    )
}

export default ItemList