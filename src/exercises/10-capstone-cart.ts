/* ============================================================
 * EXERCISE 10 — Capstone: Type & Build a Shopping Cart
 * ============================================================
 * Pull it all together: interfaces, generics, unions, utility types,
 * narrowing, and typed operations. No `any`. Run typecheck AND test.
 * ============================================================ */

/* ---- 10a. Types ----
 * A CartItem has:
 *   productId: number
 *   name: string
 *   unitPrice: number
 *   quantity: number   (>= 1)
 *
 * A Cart has:
 *   items: CartItem[]
 *   currency: "ZAR" | "USD"   (only these two)
 */

// TODO: define CartItem
export type CartItem = {
  productId: number;
  name: string;
  unitPrice: number;
  quantity: number;
};
// TODO: define Cart
export type Cart = {
  items: CartItem[];
  currency: "ZAR" | "USD";
};

/* ---- 10b. Operations (all PURE — never mutate the input cart) ---- */

// addItem: if an item with the same productId exists, increase its
// quantity; otherwise append the new item. Returns a NEW cart.
// TODO
export function addItem(cart: Cart, item: CartItem): Cart {
  const existingIndex = cart.items.findIndex((i) => i.productId === item.productId);
  if (existingIndex === -1) {
    return { ...cart, items: [...cart.items, item] };
  }
  return {
    ...cart,
    items: cart.items.map((i, index) =>
      index === existingIndex ? { ...i, quantity: i.quantity + item.quantity } : i
    ),
  };
}

// removeItem: return a new cart with the given productId removed.
// TODO
export function removeItem(cart: Cart, productId: number): Cart {
  return {
    ...cart,
    items: cart.items.filter((i) => i.productId !== productId),
  };
}

// subtotal: sum of unitPrice * quantity across all items.
// TODO: returns number
export function subtotal(cart: Cart): number {
  return cart.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

// applyDiscount: takes a cart and a discount rate 0..1 and returns the
// discounted subtotal (subtotal * (1 - rate)). Throw if rate is not in
// the range 0..1.
// TODO: returns number
export function applyDiscount(cart: Cart, rate: number): number {
  if (rate < 0 || rate > 1) throw new Error("Invalid discount rate");
  return subtotal(cart) * (1 - rate);
}

/* ---- 10c. Sample data (must satisfy your types) ---- */
export const cart: Cart = {
  currency: "ZAR",
  items: [
    { productId: 1, name: "Mug", unitPrice: 80, quantity: 2 },
    { productId: 2, name: "Notebook", unitPrice: 45, quantity: 1 },
  ],
};

// @ts-expect-error "EUR" is not a supported currency
export const badCart: Cart = { currency: "EUR", items: [] };
