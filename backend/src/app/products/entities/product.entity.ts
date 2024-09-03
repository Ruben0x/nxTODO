import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    unique: false,
    index: true,
  })
  nombre: string;
  @Prop({
    unique: false,
    index: true,
  })
  descripcion: string;
  @Prop({
    unique: false,
    index: true,
  })
  precio: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
