import "./productDetail.css";
import {useLoaderData} from "react-router-dom";
import {products} from "../data/ProductData";
import {useDispatch, useSelector} from "react-redux";
import {addCart, delCart, setQuantityItem} from "../store/Action";
import {useState} from "react";

export async function loadProduct({params}) {
    console.log(params);
    return products.find((product) => product.id == params.id);
}

export function ProductDetail() {
    const product = useLoaderData();
    console.log("Chi tiết SP");
    console.log(product);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const cart = useSelector(state => state.cart);
    const isInCart = cart.some(item => item.id === product.id);

    const addToCart = (e) => {
        if (isInCart === true) {
            dispatch(delCart(product));
        } else {
            dispatch(addCart(product));
            dispatch(setQuantityItem({id: product.id, quantity: quantity}));
        }
    }
    return (

        <div className="product-detail">
            <div className="left-column">
                <img src={product.img} className="large-image" alt="Product"/>
                <div className="thumbnail-images">
                    <img src={product.img} alt="Thumbnail 1"/>
                    <img src={product.img} alt="Thumbnail 2"/>
                    <img src={product.img} alt="Thumbnail 3"/>
                </div>
            </div>

            <div className="right-column">
                <div className="details">
                    <h2 className="product-name">{product.name} - {product.category}</h2>

                    <p className="price">{product.price.toLocaleString()} VNĐ</p>
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Số lượng: </label>
                        <input type="number" id="quantity" name="quantity"
                               onChange={event => {
                                   let inputValue = Number(event.target.value);
                                   inputValue = Math.max(1, inputValue);
                                   console.log(inputValue)
                                   setQuantity(inputValue)
                               }}
                               value={quantity}
                        />
                    </div>

                    <button onClick={addToCart}
                            className={"btn-add-to-cart "}
                    > {isInCart ? "Xoá khỏi giỏ hàng" : "Thêm vào giỏ hàng"}</button>

                    <div className="product-info">
                        <p>Mô tả: {product.des}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}