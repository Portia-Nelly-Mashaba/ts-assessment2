/* ============================================================
 * EXERCISE 3 — Mapped Types
 * ============================================================
 * Build your OWN mapped types (do not just use built-ins).
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

export interface Settings {
  theme: string;
  fontSize: number;
  notifications: boolean;
}

/* ---- 3a. ReadOnly<T> (your own) ----
 * Make every property of T readonly. Do NOT use the built-in
 * Readonly — write the mapped type yourself. */

// TODO: { readonly [K in keyof T]: T[K] }
export type ReadOnly<T> = ___;

export const locked: ReadOnly<Settings> = { theme: "dark", fontSize: 14, notifications: true };
// @ts-expect-error every field is readonly
locked.theme = "light";

/* ---- 3b. Nullable<T> ----
 * Make every property of T also allow null. */

// TODO: { [K in keyof T]: T[K] | null }
export type Nullable<T> = ___;

export const partial: Nullable<Settings> = { theme: null, fontSize: 14, notifications: null };

/* ---- 3c. Getters<T> — mapped type with key remapping ----
 * Turn each property `field: V` into a method `getField: () => V`.
 * e.g. Getters<Settings> has getTheme():string, getFontSize():number,
 * getNotifications():boolean.
 *
 * Hint: use key remapping with `as` and Capitalize:
 *   { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] } */

// TODO: mapped type with `as` key remapping
export type Getters<T> = ___;

// Must satisfy the Getters shape once your type is correct:
export const settingsGetters: Getters<Settings> = {
  getTheme: () => "dark",
  getFontSize: () => 14,
  getNotifications: () => true,
};
