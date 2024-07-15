import {products} from "./ProductData";

const MAX_PRODUCT_PER_PAGE = 4

export function getTotalPageProduct() {
    let sizeProduct = products.length
    if (sizeProduct === 0) {
        return 1;
    }
    return Math.ceil(sizeProduct * 1.0 / MAX_PRODUCT_PER_PAGE);
}

export function getTotalPageOfList(list: any) {
    let sizeProduct = list.length
    if (sizeProduct === 0) {
        return 1;
    }
    return Math.ceil(sizeProduct * 1.0 / MAX_PRODUCT_PER_PAGE);
}

export function getDataAtPage(page: number) {
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

export default function getDataAtPageOfList(list: any, page: number) {

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

export function getCategories(list: any): string[] {
    let categoriesSet: Set<string> = new Set();

    list.forEach((item: any) => {
        categoriesSet.add(item.category);
    });

    return Array.from(categoriesSet);
}

export function getListProductByCategory(category: string) {
    if (category == "All")
        return products;

    let result: any = [];

    products.map(p => {
        if (p.category == category)
            result.push(p);
    })
    return result;
}
