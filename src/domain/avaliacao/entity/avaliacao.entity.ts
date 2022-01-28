interface SN {
  id: number;
}

export class Avaliacao {
  id?: number;

  email: string;
  nomeResponsavel: string;

  telefone: string;
  dtFimAvalicao: Date;
  virouCliente: SN;

  funcaoId: number;
  clienteId: number;

  createdAt?: Date;
  updatedAt?: Date;
}
