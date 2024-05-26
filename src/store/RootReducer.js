const loadCart = () => {
    console.log(localStorage)
    return JSON.parse(localStorage.getItem('cart')) ?? [];
}
const initState = {
    products: [],
    cart: loadCart()
}
export const root = (state = initState, action) => {
    switch (action.type) {
        case "product/load": {
            let cart = loadCart();
            let products = action.payload;
            let out = [];
            //
            lop1:for (const p of products) {
                for (const c of cart) {
                    if (p.id === c.id) {
                        out.push({...p, isBuying: true});
                        continue lop1;
                    }
                }
                out.push({...p, isBuying: false});
            }
            return {
                ...state,
                products: out
            }
        }
        case "cart/add": {
            let cart = [...state.cart, action.payload];
            localStorage.setItem('cart', JSON.stringify(cart));

            return {
                ...state,
                cart: [...cart]
            }
        }
        case "cart/del": {
            let cart = state.cart.filter(p => p.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: [...cart]
            }
        }
        case "cart/setQuantityItem": {
            // chỗ này, sau khi hàm map dc duyệt thì nó trả về 1 array mới sau khi thực hiện xong
            // các thay đổi trong function
            let newCart = state.cart.map(item => {
                    if (item.id == action.payload.id) {
                        console.log("vô rồi")
                        return {...item, quantity: action.payload.quantity};
                    }
                    return item;
                }
            )
            let cart = [...newCart];
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: [...cart]
            }
        }
        // case "cart/load": {
        //     let cart = state.cart;
        //     return {
        //         ...state,
        //         cart: [...cart]
        //     }
        // }
        default:
            return state;
    }
}
