import {getListProductByName} from "../data/FakeServerAPI";
import {ProductList} from "./ProductList";
import {useParams} from 'react-router-dom';

export function SearchResult() {
    const {keySearch} = useParams();
    const listProductByName = getListProductByName(keySearch);
    const perPage:number = 4;
    return (
        <div>
            <div className="row d-flex">
                <h5>Có {listProductByName.length} món ăn khớp với từ khóa: {keySearch}</h5>
                <ProductList listProduct={listProductByName} perPage={perPage}/>
            </div>
        </div>
    );
}