import "./ProductList.css";
import {
    getCategories,
    getListProductByCategory,
} from "../data/FakeServerAPI";
import {products} from "../data/ProductData";
import {ProductList2} from "./ProductList";

export function Category() {
    const getAllCategories = getCategories(products);
    return (
        <div>
            <div className="row">
                {getAllCategories.map(category => {
                    const products = getListProductByCategory(category);
                    return (
                        <div key={category} className="category-section">
                            <h2>{category}</h2>
                            <ProductList2 listProduct={products}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}