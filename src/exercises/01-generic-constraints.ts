/* ============================================================
 * EXERCISE 1 — Generic Constraints & keyof Mapping
 * ============================================================
 * Domain: a typed e-commerce store. No `any`, no `as any`,
 * no `@ts-ignore`. Run `npm run typecheck` until zero errors.
 * ============================================================ */

export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

/* ---- 1a. Typed getter ----
 * `getField` returns the value at `key` with the CORRECT type
 * (getField(p, "price") is number, getField(p, "name") is string).
 * Asking for a key that doesn't exist must be a COMPILE error. */

// TODO: <T, K extends keyof T>(obj: T, key: K): T[K]
export function getField<___>(obj: ___, key: ___): ___ {
  return obj[key];
}

/* ---- 1b. Typed setter that returns a NEW object ----
 * `withField` returns a copy of `obj` with `key` set to `value`.
 * `value` must match the type of that field — passing a string for
 * `price` must be a compile error. Do not mutate `obj`. */

// TODO: <T, K extends keyof T>(obj: T, key: K, value: T[K]): T
export function withField<___>(obj: ___, key: ___, value: ___): ___ {
  // TODO: return a new object (spread) with key replaced by value
}

/* ---- 1c. Constrained-to-number-fields sum ----
 * `sumBy` takes an array of T and a key whose VALUE is a number, and
 * returns the sum of that field across the array. Passing a key whose
 * value is not a number (e.g. "name") must be a compile error.
 *
 * Hint: constrain K so that T[K] is number. One way:
 *   K extends keyof T, with a second constraint T[K] extends number —
 *   express it as `<T, K extends keyof T>(items: T[], key: K & (T[K] extends number ? K : never))`
 *   OR the simpler: restrict K to keys of T whose value is number using
 *   a mapped helper. Choose an approach that makes sumBy(products,"name") error. */

// TODO: type so only number-valued keys are accepted; returns number
export function sumBy<___>(items: ___, key: ___): number {
  // TODO
}

export const products: Product[] = [
  { id: 1, name: "Mug", price: 80, inStock: true },
  { id: 2, name: "Notebook", price: 45, inStock: false },
];

// @ts-expect-error "colour" is not a key of Product
getField(products[0], "colour");

// @ts-expect-error price is a number, not a string
withField(products[0], "price", "expensive");

// @ts-expect-error "name" is not a number-valued field
sumBy(products, "name");
