/**
 * Interface for the controller.
 * @class Controller
 * @template T The type of the model.
 * @export { BaseController }
 * @method {
 *  create?: (...args[]: any) => Promise<T>;
 *  all?: (...args[]: any) => Promise<T[]>;
 *  find?: (...args[]: any) => Promise<T>;
 *  patch?: (...args[]: any) => Promise<T>;
 *  delete?: (...args[]: any) => Promise<T>;
 *  }
 */
export abstract class BaseController<R> {
  public abstract create?(...args: any): Promise<R>;
  public abstract get?(...args: any): Promise<R>[];
  public abstract findBy?(...args: any): Promise<R>;
  public abstract patch?(...args: any): Promise<R>;
  public abstract remove?(...args: any): Promise<R>;
}
