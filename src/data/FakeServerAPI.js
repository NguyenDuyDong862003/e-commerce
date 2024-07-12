import {products} from "./ProductData";

const MAX_PRODUCT_PER_PAGE = 3

function getTotalPageProduct() {
    let sizeProduct = products.length
    if (sizeProduct === 0) {
        return 1;
    }
    return Math.ceil(sizeProduct * 1.0 / MAX_PRODUCT_PER_PAGE);
}

export default function getDataAtPage(page) {
    let result = [];

    let totalPage = getTotalPageProduct();
    if (page <= 0)
        page = totalPage;
    if (page > totalPage)
        page = totalPage;

    let indexStart = (page - 1) * MAX_PRODUCT_PER_PAGE;
    let indexEnd = page * MAX_PRODUCT_PER_PAGE;

    if (products.size() < indexEnd)
        indexEnd = products.size();

    for (let i = indexStart; i < indexEnd; i++) {
        result.push(products[i]);
    }

    return result;
}