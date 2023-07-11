import {IOrder} from "../interface/order";


export class OrderDto implements IOrder{
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    adress: string;
    productId: string;
    userId: string;

    constructor(firstName, lastName, email, telephone, adress, productId, userId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.adress = adress;
        this.productId = productId;
        this.userId = userId
    }
}