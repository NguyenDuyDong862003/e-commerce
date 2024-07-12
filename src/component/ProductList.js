import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addCart, delCart, setQuantityItem} from "../store/Action";
import "./ProductList.css";

export default function ProductList() {
    const products = useSelector(state => state.products);
    return (<div>
            <div className="row">
                {products.map(product => (
                    <Product key={product.id}
                             id={product.id}
                             name={product.name}
                             url={product.url}
                             img={product.img}
                             price={product.price}
                             cate={product.category}
                             votes={product.votes}
                             submitterAvatarUrl={product.submitterAvatarUrl}
                             color={product.color}
                             isBuying={product.isBuying}
                    />
                ))}
            </div>
        </div>
    );
}

export function Product(data) {
    var [product, setProduct] = useState(data);

    const dispatch = useDispatch();

    const changeColor = (e) => {
        if (product.isBuying) {
            // dispatch({type: 'cart.minus', payload: {product: product}})
            dispatch(delCart(product));
        } else {
            // dispatch({type: 'cart.add', payload: {product: product}})
            dispatch(addCart(product));
            dispatch(setQuantityItem({id: product.id, quantity: 1}));
            dispatch(setCheckoutItem({id: product.id, isCheckout: false}));
        }
        setProduct({...product, color: product.color === 'blue' ? 'red' : 'blue', isBuying: !product.isBuying})
    }
    return (
        <div className="col-3 col-xs-12 col-sm-6 col-lg-3 pb-3">
            <p></p>
            <div className="card">
                <img src={product.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{product.title}</h5>
                    <p>{product.price.toLocaleString()} VNĐ</p>
                    <p className="card-text text-center">{product.description}.</p>
                    <a onClick={changeColor}
                       className={"btn  text-center p-2 pl-2 pr-2 " + (product.color === 'red' ? " btn-danger " : " btn-primary")}>{product.isBuying ? "Xóa khỏi giỏ hàng" : "Thêm vào giỏ hàng"}</a>
                    <Link to={`/product/${product.id}`} className={"btn btn-success p-2 pl-2 pr-2"}>Chi tiết</Link>
                </div>
            </div>
        </div>
    );
}