export const loadProduct = (data: any): { type: 'product/load'; payload: any } => {
    console.log("Test: ", data);
    return {
        type: 'product/load',
        payload: data
    };
};

export const addCart = (product: any): { type: 'cart/add'; payload: { [key: string]: any } } => {
    return {
        type: 'cart/add',
        payload: {
            ...product, // Preserve original product data
            isCheckout: true, // Set isCheckout to true by default
        }
    };
};

export const delCart = (product: any): { type: 'cart/del'; payload: any } => {
    return {
        type: 'cart/del',
        payload: product
    };
};

export const setQuantityItem = (data: { id: number; quantity: number }): { type: 'cart/setQuantityItem'; payload: { id: number; quantity: number } } => {
    // data này sẽ có dạng {id:x,quantity:n}
    return {
        type: 'cart/setQuantityItem',
        payload: data
    };
};

export const setCheckoutItem = (data: { id: number; isCheckout: boolean }): { type: 'cart/setCheckoutItem'; payload: { id: number; isCheckout: boolean } } => {
    // data này sẽ có dạng {id:x,isCheckout:true hoặc false}
    return {
        type: 'cart/setCheckoutItem',
        payload: data
    };
};
export const incrementPage = () => {
    return {
        type: 'page/increment',
    }
}
export const decrementPage = () => {
    return {
        type: 'page/decrement',
    }
}
