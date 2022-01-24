# Caso de uso de criação de usuário

## Usuário

  ```TS
    interface Usuario  {
      id?: number;
      email: string;
      password: string;
      imagem: string;
      categoriaId: number;
      clienteId: number;
      funcionarioId?: number;
      createdAt?: Date;
      updatedAt?: Date;
      deletedAt?: Date;
    }
  ```

## Inputs
      
  ```TS
    interface CreateUsuarioInput {
      email: string;
      password: string;
      imagem: string;
    }
  ```

## Requisitos funcionais (RF)
    Deve ser possível criar um usuário.

## Regras de negócio (RN)
    Deve ser possível criar um usuário.
    Deve ser atribuído um cliente ao usuário.
    Deve ser atribuido uma categoria ao usuário.

## Testes unitários    

