import {products} from "./ProductData";

const MAX_PRODUCT_PER_PAGE = 4

export function getTotalPageProduct() {
    let sizeProduct = products.length
    if (sizeProduct === 0) {
        return 1;
    }
    return Math.ceil(sizeProduct * 1.0 / MAX_PRODUCT_PER_PAGE);
}

export function getTotalPageOfList(list) {
    let sizeProduct = list.length
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

    if (products.length < indexEnd)
        indexEnd = products.length;

    for (let i = indexStart; i < indexEnd; i++) {
        result.push(products[i]);
    }

    return result;
}

export default function getDataAtPageOfList(list, page) {
    let result = [];

    let totalPage = getTotalPageOfList(list);
    if (page <= 0)
        page = totalPage;
    if (page > totalPage)
        page = totalPage;

    let indexStart = (page - 1) * MAX_PRODUCT_PER_PAGE;
    let indexEnd = page * MAX_PRODUCT_PER_PAGE;

    if (list.length < indexEnd)
        indexEnd = list.length;

    for (let i = indexStart; i < indexEnd; i++) {
        result.push(list[i]);
    }

    return result;
}