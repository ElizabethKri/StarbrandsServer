import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IOrder} from "../interface/order";


export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order implements IOrder {
    @Prop() firstName: string;
    @Prop() lastName: string;
    @Prop() email: string;
    @Prop() telephone: number;
    @Prop() adress: string;
    @Prop() productId: string;
    @Prop() userId: string;
    @Prop() _id?: string

}

export const OrderSchema = SchemaFactory.createForClass(Order);