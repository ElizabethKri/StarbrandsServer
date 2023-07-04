import { Test, TestingModule } from '@nestjs/testing';
import { ProductsItemController } from './products-item.controller';

describe('ProductsItemController', () => {
  let controller: ProductsItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsItemController],
    }).compile();

    controller = module.get<ProductsItemController>(ProductsItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
