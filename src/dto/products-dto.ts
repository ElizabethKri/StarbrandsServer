import {IProducts} from "../interface/products";

export class ProductsDto implements IProducts{
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
    productTypeMan: string | null;
    productTypeWoman: string | null

    constructor(model, name, price, color, description, img, collectionNew, collectionSale,priceSale, productTypeMan, productTypeWoman) {
        this.model = model;
        this.name = name;
        this.price = price;
        this.color = color;
        this.description = description;
        this.img = img;
        this.collectionNew = collectionNew;
        this.collectionSale = collectionSale;
        this.priceSale = priceSale;
        this.productTypeMan = productTypeMan;
        this.productTypeWoman = productTypeWoman;
    }
}