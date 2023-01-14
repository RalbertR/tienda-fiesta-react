import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const referenciadb = categoryId ? 
        query(collection(db, 'products'), where('category', '==', categoryId)) : 
        collection(db, 'products') 
              
        getDocs(referenciadb).then(response => {
       
            const productosAdaptados = response.docs.map (doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productosAdaptados)

        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <div className="lds-dual-ring"></div>
    }

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer