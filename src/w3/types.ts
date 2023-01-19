/**
 * Numbered map.
 * Example:
 *   > {
 *     1: T,
 *     2: T,
 *     ...
 *     5: T,
 *   }
 */
export interface INumberedDictType<T> {
    [details: number]: T;
}
