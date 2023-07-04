import { Module } from '@nestjs/common';
import {ProductsController} from "./products.controller";
import {ProductsService} from "../../services/products/products.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Products, ProductsSchema} from "../../shemas/products";
import {PassportModule} from "@nestjs/passport";
import {jwtConstants} from "../../private/constants";
import {JwtModule} from "@nestjs/jwt";
import {ProductsItemController} from "../products-item/products-item.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: Products.name, schema: ProductsSchema}]),
    PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret
    })],
    controllers: [ProductsController, ProductsItemController],
    providers: [ProductsService]
})
export class ProductsModule {}
