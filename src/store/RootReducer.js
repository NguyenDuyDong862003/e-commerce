import {getTotalPageProduct} from "../data/FakeServerAPI";

const loadCart = () => {
    console.log(localStorage)
    return JSON.parse(localStorage.getItem('cart')) ?? [];
}
const initState = {
    products: [],
    cart: loadCart(),
    page: 1,
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
        case "cart/setCheckoutItem": {
            let newCart = state.cart.map(item => {
                    if (item.id == action.payload.id) {
                        console.log("thay đổi thành " + action.payload.isCheckout);
                        return {...item, isCheckout: action.payload.isCheckout};
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
        case "page/increment": {
            let page = state.page;
            let totalPage = getTotalPageProduct();
            return {
                ...state,
                page: page < totalPage ? page + 1 : page
            }
        }
        case "page/decrement": {
            let page = state.page;
            return {
                ...state,
                page: page > 1 ? page - 1 : page
            }
        }
        default:
            return state;
    }
}
