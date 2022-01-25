export class Usuario {
  id?: number;
  email: string;
  password: string;
  image?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string | null;
  categoriaId?: number;
}
