const products = [
    {
        id:'1', name:'Jabon', price: 1, category: 'belleza', img: 'https://media.farmacialiceo.com/export/fotos/syndet-protector-eucerin-piel-sensible-ph-5-100-g.jpg', stock: 25, description: 'Descripcion de jabon'
    },
    {
        id:'2', name:'Preparado Lacteo', price: 1, category: 'bebes', img: 'https://media.farmacialiceo.com/export/fotos/nan-3-preparado-lacteo-infantil-800-g-20220530135349-g.jpg', stock: 25, description: 'Descripcion de preparado lacteo'
    },
    {
        id:'3', name:'Curitas', price: 1, category: 'saludyfarmacia', img: 'https://media.farmacialiceo.com/export/fotos/salvelox-aposito-adhesivo-textil-1-m-x-6-cm-20220902172022-g.jpg', stock: 25, description: 'Descripcion de curitas'
    },
    {
        id:'4', name:'Aspirina', price: 1, category: 'saludyfarmacia', img: 'https://media.farmacialiceo.com/export/fotos/2b8543846c09b4b766b873a9c90f8375_asp1.png', stock: 25, description: 'Descripcion de aspirinas'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}