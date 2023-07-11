import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {Order, OrderDocument} from "../../shemas/order";
import {InjectModel} from "@nestjs/mongoose";
import {OrderDto} from "../../dto/order-dto";
import {IOrder} from "../../interface/order";

@Injectable()
export class OrderService {
    //инжектирована модель для обращения базы данных
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    //записывает наш заказ и создает новую запись
    async sendOrder(data: OrderDto): Promise<any>{
        const orderData = new this.orderModel(data);
        return orderData.save()
    }

    async getOrders(): Promise<Order[]> {
        return this.orderModel.find();
    }
}
