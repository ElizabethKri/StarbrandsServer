import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Products, ProductsDocument} from "../../shemas/products";
import {ProductsDto} from "../../dto/products-dto";
import {ProductsClient} from "../../interface/products";

@Injectable()
export class ProductsService {
    private productsCount = 2;
    constructor(@InjectModel(Products.name) private productsModel: Model<ProductsDocument>){}

    //динамически генерирует сущности базы данных
    // async generateTours(): Promise<Products[]> {
    //     for (let i = 0; i <= this.productsCount; i++ ){
    //         const products = new ProductsDto('test model', 'test name', '30.000'+ i, 'test color', 'test desc', 'test img', 'test collN','test collS', '10.000' + i)
    //         const productsData = new this.productsModel(products);
    //         await productsData.save();
    //     }
    //     return this.getAllProducts()
    // }

    async deleteTours(): Promise<any>{
        return  this.productsModel.deleteMany({})
    }


    async getAllProducts(): Promise<Products[]> {
        return this.productsModel.find();
    }

    async getWomanProducts(): Promise<Products[]> {
        return this.productsModel.find();
    }

    async getManProducts(): Promise<Products[]> {
        return this.productsModel.find();
    }

    async getSaleProducts(): Promise<Products[]> {
        return this.productsModel.find();
    }

    async getNewProducts(): Promise<Products[]> {
        return this.productsModel.find();
    }


    async uploadProduct(body: ProductsClient){
        const products = new ProductsDto(body.model, body.name, body.price, body.color, body.description, body.img, body.collectionNew, body.collectionSale, body.priceSale, body.productTypeWoman, body.productTypeMan)
        const productsData = new this.productsModel(products);
        await productsData.save();
    }

    async getProductsById(productId): Promise<Products> {
        return this.productsModel.findById(productId);
    }

    async getProductsByName(name): Promise<Products[]> {
        return this.productsModel.find({name: { "$regex": name, "$options": "i" }})

    }


}
