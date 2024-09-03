import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.productModel.create(createProductDto);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    return await this.productModel.find();
  }

  async findOne(id: string) {
    let producto: Product;

    if (isValidObjectId(id)) {
      producto = await this.productModel.findById(id);
    }

    if (!producto)
      throw new NotFoundException(`Producto con id ${id} no existe`);

    return producto;
  }

  async remove(id: string) {
    const producto = await this.findOne(id);

    await producto.deleteOne();
  }
}
