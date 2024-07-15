import {getListProductByName} from "../data/FakeServerAPI";
import {ProductList2} from "./ProductList";
import {useParams} from 'react-router-dom';

export function SearchResult() {
    const {keySearch} = useParams();
    const listProductByName = getListProductByName(keySearch);

    return (
        <div>
            <div className="row">
                <h5>Có {listProductByName.length} món ăn khớp với từ khóa "{keySearch}"</h5>
                <ProductList2 listProduct={listProductByName}/>
            </div>
        </div>
    );
}