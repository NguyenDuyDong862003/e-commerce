import { useState } from "react";
import { getCategories } from "../data/FakeServerAPI";
import { products } from "../data/ProductData";
import { OneCategory } from "../component/Category";
import './Shop.css';

export function Shop() {
    const listCategories = getCategories(products);
    listCategories.unshift("All");
    const [filterCategory, setFilterCategory] = useState(listCategories[0]);

    return (
        <div className="shop-container">
            <div className="shop-header">
                THỰC ĐƠN
            </div>
            <div className="category-buttons">
                {listCategories.map((category, index) => {
                    return (
                        <button
                            key={index}
                            className={`category-button ${filterCategory === category ? 'active' : ''}`}
                            onClick={() => setFilterCategory(category)}>
                            {category}
                        </button>
                    );
                })}
            </div>
            <div className="product-list">
                <OneCategory category={filterCategory} />
            </div>
        </div>
    );
}

export default Shop;
