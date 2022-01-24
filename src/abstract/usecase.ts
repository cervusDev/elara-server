/**
 * UseCase base class
 * @interface
 * @classdesc UseCase base class
 * @abstract
 * @method execute
 * @param {I} input - Input data
 * @returns {Promise<R>}
 * @template I, R
 */

export abstract class Usecase<I = never, R = I> {
  public abstract execute(input: I): Promise<R>;
}
