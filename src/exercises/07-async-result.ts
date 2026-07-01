/* ============================================================
 * EXERCISE 7 — Async Typing & a Result<T, E> wrapper
 * ============================================================
 * No `any`. Run `npm run typecheck` AND `npm test`.
 * ============================================================ */

/* ---- 7a. Result type ----
 * A Result is either an ok value or an err. Model it as a generic
 * discriminated union:
 *   { ok: true; value: T } | { ok: false; error: E } */

// TODO
export type Result<T, E> = ___;

// Helpers:
// TODO: return { ok: true, value }
export function ok<T>(value: T): Result<T, never> {
  // TODO
}
// TODO: return { ok: false, error }
export function err<E>(error: E): Result<never, E> {
  // TODO
}

/* ---- 7b. Safe division returning a Result ----
 * `divide` returns ok(a/b), or err("division by zero") when b === 0.
 * Return type: Result<number, string>. */

// TODO
export function divide(a: number, b: number): Result<number, string> {
  // TODO
}

/* ---- 7c. Async: typed fetch simulation ----
 * `loadOrder` is async. Given an id, it resolves to a Result:
 *   - if id > 0  -> ok({ id, total: id * 10 })
 *   - otherwise  -> err("invalid id")
 * The success shape is { id: number; total: number }.
 * Type the return as Promise<Result<{ id: number; total: number }, string>>. */

// TODO: async, correct Promise<Result<...>> return type
export async function loadOrder(id: number): ___ {
  // TODO
}
