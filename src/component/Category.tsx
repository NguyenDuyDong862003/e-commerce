import "./ProductList.css";
import {
    getCategories,
    getListProductByCategory,
} from "../data/FakeServerAPI";
import {products} from "../data/ProductData";
import {ProductList} from "./ProductList";

export function Category() {
    const getAllCategories = getCategories(products);
    const perPage:number = 4;
    return (
        <div>
            <div className="row">
                {getAllCategories.map(category => {
                    const products = getListProductByCategory(category);
                    return (
                        <div key={category} className="category-section">
                            <h2>{category}</h2>
                            <ProductList listProduct={products} perPage={perPage}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export function OneCategory(data: any) {
    const products = getListProductByCategory(data.category);
    const perPage:number = 10;
    return (
        <div className="row">
            <ProductList listProduct={products} perPage={perPage}/>
        </div>
    );
}
