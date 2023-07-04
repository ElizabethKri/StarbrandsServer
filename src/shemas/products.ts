import {HydratedDocument} from "mongoose";
import {IProducts} from "../interface/products";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products implements IProducts {
    constructor(model: string, name: string, price: number, color: string, description: string, img: string, collectionNew: string, collectionSale: string, priceSale: number, productId: string, productTypeMan: string, productTypeWoman: string) {}

    @Prop() model: string;
    @Prop() name: string;
    @Prop() price: number;
    @Prop() color: string;
    @Prop() description: string;
    @Prop() img: string;
    @Prop() productId: string;
    @Prop() collectionNew: string | null;
    @Prop() collectionSale: string | null;
    @Prop() priceSale: number | null;
    @Prop() productTypeMan: string | null;
    @Prop() productTypeWoman: string | null;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);