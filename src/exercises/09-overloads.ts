/* ============================================================
 * EXERCISE 9 — Function Overloads
 * ============================================================
 * No `any`. Run `npm run typecheck` AND `npm test`.
 * ============================================================ */

/* ---- 9a. Overloaded `parseInput` ----
 * Provide TWO overload signatures + one implementation:
 *   parseInput(value: string): string[]     // splits on commas
 *   parseInput(value: number): number[]     // returns [value]
 * Calling with a string must give string[]; with a number, number[].
 * The implementation signature may use `string | number`, but the two
 * PUBLIC overloads must be declared above it. */

// TODO: overload signature 1 (string -> string[])
// TODO: overload signature 2 (number -> number[])
// TODO: implementation
export function parseInput(value: ___): ___ {
  // TODO: if string, split on ","; if number, return [value]
}

/* ---- 9b. Prove the overloads resolve ----
 * Once correct, `a` is string[] and `b` is number[]. Do not annotate
 * them — inference must produce the right types. */
export const a = parseInput("x,y,z");   // string[]
export const b = parseInput(7);         // number[]

// @ts-expect-error boolean is not an accepted input
parseInput(true);
