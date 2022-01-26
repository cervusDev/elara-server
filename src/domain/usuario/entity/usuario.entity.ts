export class Usuario {
  id?: number;
  email: string;
  name: string;
  password: string;
  image?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string | null;
  categoriaId?: number;
}
