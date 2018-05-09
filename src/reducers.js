const products = (state=[], action) => {

    if(action.type === 'REPLACE_PRODUCTS') {
        return action.products;
    }
    return state;
};


const cart = (state=[], action) => {

    if(action.type === "ADD_TO_CART") {
        return state.concat(action.product);

    } else if(action.type === 'REMOVE_FROM_CART') {
        let productIndex = action.product.id;
        return state.filter((product) => {
                return product.id !== productIndex
            });
    }
    return state;
};

export { products, cart };