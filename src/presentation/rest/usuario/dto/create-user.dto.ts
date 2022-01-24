import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  categoriaId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  clienteId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
