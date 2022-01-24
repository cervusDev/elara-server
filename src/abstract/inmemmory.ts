/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Injectable } from '@nestjs/common';

import { Entity } from './entity';
import { Repository } from './repository';

@Injectable()
export class InMemoryRepository<
  TEntity extends Entity,
> extends Repository<TEntity> {
  protected readonly inmemoryData: TEntity[];

  constructor(private readonly dataMock?: TEntity[]) {
    super();
    this.inmemoryData = this.dataMock || [];
  }

  public async create(data: TEntity): Promise<TEntity> {
    data.id =
      this.inmemoryData.length > 0 ? this.inmemoryData.slice(-1)[0].id + 1 : 1;

    const count = this.inmemoryData.push(data);

    return this.inmemoryData[count - 1];
  }

  public async getAll(): Promise<TEntity[]> {
    return this.inmemoryData;
  }

  public async getById(id: number): Promise<TEntity> {
    return this.inmemoryData.find((item) => item.id === id);
  }

  public async getMany(filter: Partial<TEntity>): Promise<TEntity[]> {
    let filtered = this.inmemoryData;

    for (const key in filter) {
      filtered = filtered.filter((item) => item[key] === filter[key]);
    }
    return filtered;
  }

  public async getOne(filter: Partial<TEntity>): Promise<TEntity> {
    return this.inmemoryData.find((item) => item.id === filter.id);
  }

  public async patch(id: number, data: Partial<TEntity>): Promise<TEntity> {
    const index = this.getIndexById(id);

    if (index) {
      for (const key in data) {
        this.inmemoryData[index][key] = data[key];
      }

      return this.inmemoryData[index];
    }

    return undefined;
  }

  public async update(id: number, data: TEntity): Promise<TEntity> {
    const index = this.getIndexById(id);

    if (index) {
      this.inmemoryData[index] = data;
      return this.inmemoryData[index];
    }
    return undefined;
  }

  public delete(id: number): Promise<void> {
    const index = this.getIndexById(id);

    if (index) {
      this.inmemoryData.splice(index, 1);
    }
    return undefined;
  }

  private getIndexById(id: number) {
    return this.inmemoryData.findIndex((item) => item.id === id);
  }
}
