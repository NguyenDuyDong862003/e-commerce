import { getTotalPageProduct } from "../data/FakeServerAPI";

const loadCart = (): any[] => {
    const cartData = localStorage.getItem('cart');
    console.log(cartData);
    return JSON.parse(cartData || '[]');
}


const initState: RootState = {
    products: [],
    cart: loadCart(),
    page: 1,
}

interface Product {
    id: string;
    isBuying: boolean;
}

interface CartItem extends Product {
    quantity: number;
    isCheckout: boolean;
}

interface RootState {
    products: Product[];
    cart: CartItem[];
    page: number;
}

type Action =
    | { type: 'product/load'; payload: Product[] }
    | { type: 'cart/add'; payload: CartItem }
    | { type: 'cart/del'; payload: { id: string } }
    | { type: 'cart/setQuantityItem'; payload: { id: string; quantity: number } }
    | { type: 'cart/setCheckoutItem'; payload: { id: string; isCheckout: boolean } }
    | { type: 'page/increment' }
    | { type: 'page/decrement' };

export const root = (state: RootState = initState, action: Action): RootState => {
    switch (action.type) {
        case "product/load": {
            const cart = loadCart();
            const products = action.payload;
            const out: Product[] = [];

            lop1: for (const p of products) {
                for (const c of cart) {
                    if (p.id === c.id) {
                        out.push({ ...p, isBuying: true });
                        continue lop1;
                    }
                }
                out.push({ ...p, isBuying: false });
            }

            return {
                ...state,
                products: out
            };
        }
        case "cart/add": {
            const cart = [...state.cart, action.payload];
            localStorage.setItem('cart', JSON.stringify(cart));

            return {
                ...state,
                cart: [...cart]
            };
        }
        case "cart/del": {
            const cart = state.cart.filter(p => p.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: [...cart]
            };
        }
        case "cart/setQuantityItem": {
            const newCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    console.log("vô rồi");
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
            const cart = [...newCart];
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: [...cart]
            };
        }
        case "cart/setCheckoutItem": {
            const newCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    console.log("thay đổi thành " + action.payload.isCheckout);
                    return { ...item, isCheckout: action.payload.isCheckout };
                }
                return item;
            });
            const cart = [...newCart];
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: [...cart]
            };
        }
        case "page/increment": {
            const page = state.page;
            const totalPage = getTotalPageProduct();
            return {
                ...state,
                page: page < totalPage ? page + 1 : page
            };
        }
        case "page/decrement": {
            const page = state.page;
            return {
                ...state,
                page: page > 1 ? page - 1 : page
            };
        }
        default:
            return state;
    }
};

