export interface IProducts {
    model: string;
    name: string;
    price: number;
    color: string;
    description: string;
    img: string;
    productId: string;
    collectionNew: string | null;
    collectionSale: string | null;
    priceSale: number | null;
}

export interface ProductsClient {
    name: string;
    price: number;
    color: string;
    img: string;
    collectionNew: string | null;
    collectionSale: string | null;
    priceSale: number | null;
    model: string;
    description: string;
    productTypeMan: string | null;
    productTypeWoman: string | null;
}