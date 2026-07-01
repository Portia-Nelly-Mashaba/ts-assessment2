/* ============================================================
 * EXERCISE 6 — Discriminated-Union Reducer (state machine)
 * ============================================================
 * A typed reducer with exhaustive action handling. No `any`.
 * Run `npm run typecheck`.
 * ============================================================ */

/* The state of a data fetch. Model as a discriminated union on `status`. */
export type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

/* ---- 6a. Actions ----
 * Model the actions as a discriminated union on `type`:
 *   { type: "FETCH" }
 *   { type: "RESOLVE"; data: T }
 *   { type: "REJECT"; error: string }
 *   { type: "RESET" }
 */

// TODO: define Action<T> as a discriminated union of the four shapes
export type Action<T> = ___;

/* ---- 6b. The reducer ----
 * Given the current state and an action, return the next state:
 *   FETCH   -> { status: "loading" }
 *   RESOLVE -> { status: "success"; data }
 *   REJECT  -> { status: "error"; message: error }
 *   RESET   -> { status: "idle" }
 * You MUST switch on action.type and include a default branch with a
 * `never` exhaustiveness check so a new action type fails to compile. */

export function reducer<T>(_state: FetchState<T>, action: Action<T>): FetchState<T> {
  switch (action.type) {
    // TODO: FETCH
    // TODO: RESOLVE
    // TODO: REJECT
    // TODO: RESET
    default: {
      // TODO: const _exhaustive: never = action; throw ...
    }
  }
}
