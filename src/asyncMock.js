const products =  [
    { 
        id: '1', 
        name: 'Hamburguesa Swift x12', 
        price: 550, 
        category: 'hamburguesa', 
        img:'/img/swift12.jpeg', 
        stock: 6, 
        description:'Pack de Hamburguesas congeladas Swift x 12 unidades'
    },
    { 
        id: '2', 
        name: 'Hamburguesa Paty x12', 
        price: 780, 
        category: 'hamburguesa', 
        img:'/img/paty12.jpeg', 
        stock: 10, 
        description:'Pack de Hamburguesas congeladas Paty x 12 unidades'
    },
    { 
        id: '3', 
        name: 'Pizza Sibarita Muzzarella x2', 
        price: 690, 
        category: 'pizza', 
        img:'/img/sibarita.jpeg', 
        stock: 3, 
        description:'Pizza congelada Sibarita Muzzarella (2 Unidades)'
    },
    { 
        id: '4', 
        name: 'Pizza Sibarita Muzza y Jamon x2', 
        price: 870, 
        category: 'pizza', 
        img:'/img/sibaritajamon.jpeg', 
        stock: 8, 
        description:'Pizza congelada Sibarita Muzzarella y Jamon (2 Unidades)'
    },
    { 
        id: '5', 
        name: 'Gaseosa Coca Cola 2,25lt', 
        price: 380, 
        category: 'gaseosa', 
        img:'/img/coca.jpeg', 
        stock: 2, 
        description:'Coca Cola no retornable por 2,25lt'
    },
    { 
        id: '6', 
        name: 'Manaos sabor Cola 2,25lt', 
        price: 180, 
        category: 'gaseosa', 
        img:'/img/manaos.jpeg', 
        stock: 20, 
        description:'Gaseosa Manaos no retornable por 2,25lt'
    },
    
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}