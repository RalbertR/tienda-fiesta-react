import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase' 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        const docRefer = doc(db, 'products', productId)
        getDoc(docRefer).then(response => { 
            const data = response.data()
            const productoAdaptado = { id: response.id, ...data}
            setProduct(productoAdaptado)
        }).finally(()=> { setLoading(false)})

    }, [productId])

    if(loading) {
        return <div className="lds-dual-ring"></div>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer