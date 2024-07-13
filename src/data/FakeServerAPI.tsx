import { products } from "./ProductData";

const MAX_PRODUCT_PER_PAGE: number = 12;

export function getTotalPageProduct(): number {
    let sizeProduct: number = products.length;
    if (sizeProduct === 0) {
        return 1;
    }
    return Math.ceil(sizeProduct * 1.0 / MAX_PRODUCT_PER_PAGE);
}

export default function getDataAtPage(page: number): typeof products {
    let result: typeof products = [];

    let totalPage: number = getTotalPageProduct();
    if (page <= 0)
        page = totalPage;
    if (page > totalPage)
        page = totalPage;

    let indexStart: number = (page - 1) * MAX_PRODUCT_PER_PAGE;
    let indexEnd: number = page * MAX_PRODUCT_PER_PAGE;

    if (products.length < indexEnd)
        indexEnd = products.length;

    for (let i: number = indexStart; i < indexEnd; i++) {
        result.push(products[i]);
    }

    return result;
}

