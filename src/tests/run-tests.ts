/* Runtime self-check. Run: npm test
 * Types are checked separately with `npm run typecheck`. Need BOTH. */

import { getField, withField, sumBy, products } from "../exercises/01-generic-constraints.ts";
import { updateProduct, buildPriceList } from "../exercises/02-utility-types.ts";
import { isUser, parseUser, toInt } from "../exercises/05-unknown-guards.ts";
import { reducer } from "../exercises/06-state-machine.ts";
import { ok, err, divide, loadOrder } from "../exercises/07-async-result.ts";
import { parseInput } from "../exercises/09-overloads.ts";
import { addItem, removeItem, subtotal, applyDiscount, cart } from "../exercises/10-capstone-cart.ts";

let passed = 0, failed = 0;
function check(name: string, actual: unknown, expected: unknown): void {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log(`  \u2713 ${name}`); }
  else { failed++; console.log(`  \u2717 ${name}\n      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`); }
}
function checkThrows(name: string, fn: () => unknown): void {
  try { fn(); failed++; console.log(`  \u2717 ${name}\n      expected throw`); }
  catch { passed++; console.log(`  \u2713 ${name}`); }
}

console.log("\nExercise 1 — generic constraints");
check("getField price", getField(products[0], "price"), 80);
check("withField returns new object", withField(products[0], "price", 99).price, 99);
check("withField does not mutate", products[0].price, 80);
check("sumBy price", sumBy(products, "price"), 125);

console.log("\nExercise 2 — utility types");
check("updateProduct merges", updateProduct(products[0], { price: 100 }).price, 100);
check("buildPriceList", buildPriceList(products), { Mug: 80, Notebook: 45 });

console.log("\nExercise 5 — guards");
check("isUser true", isUser({ id: 1, email: "a@b.com" }), true);
check("isUser false (missing email)", isUser({ id: 1 }), false);
check("isUser false (not object)", isUser("nope"), false);
check("parseUser ok", parseUser({ id: 2, email: "x@y.com" }), { id: 2, email: "x@y.com" });
check("parseUser null", parseUser(42), null);
check("toInt number", toInt(5), 5);
check("toInt string", toInt("7"), 7);
checkThrows("toInt NaN throws", () => toInt("abc"));

console.log("\nExercise 6 — reducer");
check("FETCH -> loading", reducer({ status: "idle" }, { type: "FETCH" }), { status: "loading" });
check("RESOLVE -> success", reducer({ status: "loading" }, { type: "RESOLVE", data: 7 }), { status: "success", data: 7 });
check("REJECT -> error", reducer({ status: "loading" }, { type: "REJECT", error: "boom" }), { status: "error", message: "boom" });
check("RESET -> idle", reducer({ status: "success", data: 1 }, { type: "RESET" }), { status: "idle" });

console.log("\nExercise 7 — result & async");
check("ok", ok(5), { ok: true, value: 5 });
check("err", err("bad"), { ok: false, error: "bad" });
check("divide ok", divide(10, 2), { ok: true, value: 5 });
check("divide by zero", divide(1, 0), { ok: false, error: "division by zero" });

console.log("\nExercise 9 — overloads");
check("parseInput string", parseInput("a,b,c"), ["a", "b", "c"]);
check("parseInput number", parseInput(4), [4]);

console.log("\nExercise 10 — cart");
check("subtotal", subtotal(cart), 205);
check("addItem existing bumps qty", addItem(cart, { productId: 1, name: "Mug", unitPrice: 80, quantity: 1 }).items[0].quantity, 3);
check("addItem does not mutate", cart.items[0].quantity, 2);
check("removeItem", removeItem(cart, 1).items.length, 1);
check("applyDiscount 10%", applyDiscount(cart, 0.1), 184.5);
checkThrows("applyDiscount bad rate throws", () => applyDiscount(cart, 2));

// async check
(async () => {
  const good = await loadOrder(3);
  check("loadOrder ok", good, { ok: true, value: { id: 3, total: 30 } });
  const bad = await loadOrder(0);
  check("loadOrder err", bad, { ok: false, error: "invalid id" });
  console.log(`\n${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
})();
