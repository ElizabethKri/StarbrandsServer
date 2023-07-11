import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {OrderService} from "../../services/order/order.service";
import {OrderDto} from "../../dto/order-dto";
import {IOrder} from "../../interface/order";
import {Order} from "../../shemas/order";


@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {
    }
    @Post()
    initOrder(@Body() data: OrderDto): any {
        const orderData = new OrderDto(data.firstName, data.lastName, data.email,  data.telephone,  data.adress,data.productId, data.userId);
        return this.orderService.sendOrder(orderData)
    }
    @Get()
    getOrders(): Promise<Order[]> {
        return this.orderService.getOrders();
    }



}
