/* ============================================================
 * EXERCISE 8 — Template Literal Types
 * ============================================================
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 8a. Event name union ----
 * Given entities "user" | "order" and actions "created" | "deleted",
 * build the union of all "entity:action" strings:
 *   "user:created" | "user:deleted" | "order:created" | "order:deleted"
 * Use a template literal type over the two unions. */

export type Entity = "user" | "order";
export type Act = "created" | "deleted";

// TODO: `${Entity}:${Act}`
export type EventName = ___;

export const ev: EventName = "order:created";
// @ts-expect-error not a valid entity:action pair
export const badEv: EventName = "user:updated";

/* ---- 8b. Typed route params ----
 * `RouteWithId<T>` prefixes a base path with a leading slash and
 * appends "/:id".
 *   RouteWithId<"users"> = "/users/:id"
 * Use a template literal type. */

// TODO: `/${T}/:id`
export type RouteWithId<T extends string> = ___;

export const r: RouteWithId<"users"> = "/users/:id";

/* ---- 8c. Prefix keys ----
 * `Prefixed<T, P>` remaps each key of T to `${P}_${K}` (keys stay
 * mapped to the same value type). Combine a mapped type, `as`, and a
 * template literal.
 *   Prefixed<{ a: number }, "cfg"> = { cfg_a: number } */

// TODO: { [K in keyof T as `${P}_${string & K}`]: T[K] }
export type Prefixed<T, P extends string> = ___;

export const cfg: Prefixed<{ a: number; b: string }, "cfg"> = { cfg_a: 1, cfg_b: "x" };
