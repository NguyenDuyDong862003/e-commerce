import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addCart, delCart, setCheckoutItem, setQuantityItem} from "../store/Action";
import "./ProductList.css";
import {getTotalPageOfList} from "../data/FakeServerAPI";
import getDataAtPageOfList from "../data/FakeServerAPI";

interface ProductProps {
    listProduct: any[]; // Kiểu của listProduct là một mảng các đối tượng
    perPage: number; // Kiểu của perPage là số nguyên
}
export function ProductList(props: ProductProps) {
    const { listProduct, perPage } = props;
    const [page, setPage] = useState(1);
    const listProductAtPage = getDataAtPageOfList(listProduct, page, perPage);
    const totalPage = Number(getTotalPageOfList(listProduct, perPage));
    console.log('perPage in ProductList:', perPage);
    if (typeof perPage !== 'number') {
        throw new Error('perPage must be a number');
    }
    console.log('Total pages:', totalPage);
    if (page > totalPage) {
        setPage(1);
    }
    console.log("render lại page " + page);
    if (!Array.isArray(listProduct)) {
        console.error("listProduct is not an array:", listProduct);
        return <div>Invalid product list</div>;
    }
    return (
        <div>
            <div className="row">
                {listProductAtPage.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        price={product.price}
                        cate={product.category}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <button
                    onClick={() => {
                        setPage(page - 1);
                    }
                    }
                    disabled={page === 1}
                    className="btn-page"
                >
                    &lt;
                </button>
                <span className="page">
                    Trang:{page}/{totalPage}
                </span>
                <button
                    onClick={() => {
                        setPage(page + 1);
                    }
                    }
                    disabled={page === totalPage}
                    className="btn-page"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export function Product(data: any) {
    const [product, setProduct] = useState(data);

    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);
    const isInCart = cart.some((item: { id: any; }) => item.id === product.id);
    const changeColor = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (isInCart) {
            dispatch(delCart(product));
        } else {
            dispatch(addCart(product));
            dispatch(setQuantityItem({id: product.id, quantity: 1}));
        }

    };
    return (
        <div className="col-3 col-xs-12 col-sm-6 col-lg-3 pb-3">
            <p></p>
            <div className="card h-100 d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={product.img} className="card-img-top img-fluid" alt="..."/>
                </div>
                <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p>{product.price.toLocaleString()} VNĐ</p>
                    <a
                        onClick={changeColor}
                        className={"btn  text-center p-2 pl-2 pr-2 " + (isInCart ? " btn-danger " : " btn-primary")}>{isInCart ? "Xóa khỏi giỏ hàng" : "Thêm vào giỏ hàng"}</a>
                    <p></p>
                    <Link to={`/product/${product.id}`} className={"btn btn-success p-2 pl-2 pr-2"}>
                        Chi tiết
                    </Link>
                </div>
            </div>
        </div>
    );
}