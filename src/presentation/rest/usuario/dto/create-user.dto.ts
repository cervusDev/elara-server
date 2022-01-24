import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty()
  categoriaId: number;
  @ApiProperty()
  clienteId: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
