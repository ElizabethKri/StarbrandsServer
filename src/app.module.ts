import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {OrderModule} from "./controllers/order/order.module";
import {ProductsModule} from "./controllers/products/products.module";

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/StarBrands'),
  OrderModule,
  ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
