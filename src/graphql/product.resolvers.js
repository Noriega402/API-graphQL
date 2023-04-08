const product = (_, { id }) => {
    return {
        id,
        name: "PS5",
        price: 5499.99,
        description: "Videogame console of Sony",
        image: "https://my-image.png",
        createdAt: new Date().toISOString()
    }
}

const products = (_, args) => {
    return []
}

const addProduct = () => {

}

module.exports = { product, products, addProduct }