import "./productDetail.css";
import {useLoaderData, useNavigate} from "react-router-dom";
import {products} from "../data/ProductData";
import {useDispatch} from "react-redux";
import {addCart, setQuantityItem} from "../store/Action";

export async function loadProduct({params}) {
    console.log(params);
    return products.find((product) => product.id == params.id);
}

export function ProductDetail() {
    const product = useLoaderData();
    const dispatch = useDispatch();
    const addToCart = (e) => {
        const quantity = parseInt(document.getElementById("quantity").value);
        dispatch(addCart(product));
        dispatch(setQuantityItem({id: product.id, quantity:quantity }));
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

                    <p className="price">{product.price} VNĐ</p>
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Số lượng: </label>
                        <input type="number" id="quantity" name="quantity" defaultValue="1" min="1"/>
                    </div>

                    <button onClick ={addToCart} className="btn-add-to-cart">Thêm vào giỏ hàng</button>

                    <div className="product-info">
                        <p>Mô tả: {product.des}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}