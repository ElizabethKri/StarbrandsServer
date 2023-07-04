import {Body, Controller, NestInterceptor, Post, UseInterceptors} from '@nestjs/common';
import {ProductsService} from "../../services/products/products.service";
import {FilesInterceptor} from "@nestjs/platform-express";
import {ProductsClient} from "../../interface/products";
import {diskStorage} from "multer";

@Controller('product-item')
export class ProductsItemController {
    constructor(private productsService: ProductsService) {
    }
    static imgName: string;

    @Post()
//метод, который будет каждый раз вызываться
    @UseInterceptors(FilesInterceptor('img', 1,{

            storage: diskStorage({
                destination: './public/',
                //метод (объект. файл. колбэк)
                filename: (req, file, cb) => {
                    const imgType = file.mimetype.split('/')
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    const imgName = file.filename + '-' + uniqueSuffix + '.' + imgType[1];
                    cb(null, imgName);
                    //запись файла
                    ProductsItemController.imgName = imgName
                }
            })
        })
    )
    initTours(@Body() body: ProductsClient): void {
        body.img = ProductsItemController.imgName;
        this.productsService.uploadProduct(body);
    }
}
