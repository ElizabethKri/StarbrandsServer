import { Module } from '@nestjs/common';
import {Order, OrderSchema} from "../../shemas/order";
import {MongooseModule} from "@nestjs/mongoose";
import {OrderController} from "./order.controller";
import {OrderService} from "../../services/order/order.service";
import {ProductsItemController} from "../products-item/products-item.controller";

@Module({imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }] )],
    controllers: [OrderController],
    providers: [OrderService]})
export class OrderModule {}
