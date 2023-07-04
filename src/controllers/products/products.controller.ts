import {Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ProductsService} from "../../services/products/products.service";
import {IProducts} from "../../interface/products";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {
    }

    @Post()
    // initProducts(): Promise<IProducts[]> {
    //     return this.productsService.generateTours(); //метод для записи данных в базу
    // //     // return this.toursService.getAllTours(); //вызываем результат из базы
    // // }

    @Get()
    getAllProducts():Promise<IProducts[]>{
        return this.productsService.getAllProducts();
    }

    @Get()
    getWomanProducts():Promise<IProducts[]>{
        return this.productsService.getWomanProducts();
    }

    @Get()
    getManProducts():Promise<IProducts[]>{
        return this.productsService.getManProducts();
    }

    @Get()
    getNewProducts():Promise<IProducts[]>{
        return this.productsService.getNewProducts();
    }

    @Get()
    getSaleProducts():Promise<IProducts[]>{
        return this.productsService.getSaleProducts();
    }

    @Get(":id")
    getProductsById(@Param("productId") productId): Promise<IProducts> {
        return this.productsService.getProductsById(productId);
    }

    @Delete()
    removeAllProducts(): Promise<any> {
        return this.productsService.deleteTours();
    }


    @Get("name")
    getProductsByName(@Param("name") name): Promise<IProducts[]>{
        return this.productsService.getProductsByName(name)
    }

}
