import { Entity } from './entity';

/**
 * Base repository class.
 * Segregation Interface and Implementation.
 *
 * @export
 * @abstract
 * @class Repository
 * @template T
 */

export abstract class Repository<T extends Entity> {
  public abstract create(data: T): Promise<T>;
  public abstract findById(id: number): Promise<T>;
  public abstract findAll(): Promise<T[]>;
  public abstract update(data: T, id: number): Promise<T>;
  public abstract delete(id: number): Promise<T>;
}
