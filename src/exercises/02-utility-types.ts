/* ============================================================
 * EXERCISE 2 — Utility Types (Partial, Pick, Omit, Record)
 * ============================================================
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

import type { Product } from "./01-generic-constraints.ts";

/* ---- 2a. Partial for updates ----
 * `updateProduct` takes a product and a set of changes where EVERY
 * field is optional, and returns the merged product. Use Partial. */

// TODO: changes should be Partial<Product>; returns Product
export function updateProduct(product: Product, changes: ___): ___ {
  // TODO: merge and return
}

/* ---- 2b. Pick ----
 * `ProductPreview` is just the id and name of a Product. Build it
 * with Pick (do NOT retype the fields by hand). */

// TODO: Pick<Product, "id" | "name">
export type ProductPreview = ___;
export const preview: ProductPreview = { id: 1, name: "Mug" };

/* ---- 2c. Omit ----
 * `NewProduct` is a Product WITHOUT the id (the server assigns it).
 * Build it with Omit. */

// TODO: Omit<Product, "id">
export type NewProduct = ___;
export const draft: NewProduct = { name: "Pen", price: 15, inStock: true };

/* ---- 2d. Record ----
 * `priceList` maps a product name (string) to its price (number).
 * Type it with Record, then implement `buildPriceList` which turns an
 * array of products into that map. */

// TODO: Record<string, number>
export type PriceList = ___;

// TODO: build a PriceList from products (name -> price)
export function buildPriceList(items: Product[]): PriceList {
  // TODO
}

// @ts-expect-error id was omitted from NewProduct
export const badDraft: NewProduct = { id: 9, name: "Pen", price: 15, inStock: true };
