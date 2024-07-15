import {useState} from "react";
import getDataAtPageOfList, {getCategories, getListProductByCategory, getTotalPageOfList} from "../data/FakeServerAPI";
import {Product, ProductList2} from "./ProductList";
import {products} from "../data/ProductData";
import {Category2} from "./Category";

export function Shop() {
    const listCategories = getCategories(products);
    listCategories.unshift("All");
    const [filterCategory, setFilterCategory] = useState(listCategories[0]);

    // console.log("render lại");

    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Chọn category
                </button>
                <ul className="dropdown-menu">
                    {/*<li><a className="dropdown-item" href="#">Action</a></li>*/}
                    {/*<li><a className="dropdown-item" href="#">Another action</a></li>*/}
                    {/*<li><a className="dropdown-item" href="#">Something else here</a></li>*/}

                    {listCategories.map((category, index) => {
                        return (
                            <li key={index}
                                onClick={() => {
                                    setFilterCategory(listCategories[index])
                                }}>
                                <a className="dropdown-item" href="#">{category}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="row">
                <Category2 category={filterCategory}/>
            </div>
        </div>
    );
}