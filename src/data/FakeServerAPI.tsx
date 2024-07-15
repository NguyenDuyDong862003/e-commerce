import {products} from "./ProductData";


export function getTotalPageProduct(perPage: number) {
    const sizeProduct = products.length;
    return sizeProduct === 0 ? 1 : Math.ceil(sizeProduct / perPage);
}

export function getTotalPageOfList(list: any, perPage: number) {
    const sizeProduct = list.length;
    return sizeProduct === 0 ? 1 : Math.ceil(sizeProduct / perPage);
}

export default function getDataAtPageOfList(list: any, page: number, perPage: number) {

    let result = [];

    let totalPage = getTotalPageOfList(list, perPage);

    if (page <= 0)
        page = totalPage;
    if (page > totalPage)
        page = totalPage;

    let indexStart = (page - 1) * perPage;
    let indexEnd = page * perPage;

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
        let result: any = [];
    if (category == "All") {
        return result = products;
    }
    products.map(p => {
        if (p.category == category)
            result.push(p);
    })
    return result;
}
export function getListProductByName(name: string | undefined) {
    let result: any = [];
    if (name == undefined)
        return result;
    if (name == "")
        // return products;
        return result;

    products.map(p => {
        if (p.name.toLowerCase().includes(name.toLowerCase()))
            result.push(p);
    })
    return result;
}
