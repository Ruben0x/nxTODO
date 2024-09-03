import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsString()
  @IsNotEmpty()
  descripcion: string;
  @IsNumber()
  @Min(1)
  precio: number;
}
