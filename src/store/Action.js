export const loadProduct = (data) => {
    console.log("Test: ", data)
    return {
        type: 'product/load',
        payload: data
    }
}
export const addCart = (product) => {
    return {
        type: 'cart/add',
        payload: product
    }
}
export const delCart = (product) => {
    return {
        type: 'cart/del',
        payload: product
    }
}

export const setQuantityItem = (data) => {
    // data này sẽ có dạng {id:x,quantity:n}
    return {
        type: 'cart/setQuantityItem',
        payload: data
    }
}

export const setCheckoutItem = (data) => {
    // data này sẽ có dạng {id:x,isCheckout:true hoặc false}
    return {
        type: 'cart/setCheckoutItem',
        payload: data
    }
}