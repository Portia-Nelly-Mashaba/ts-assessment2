# TypeScript Assessment 2 — Write-up

## 1. What does a generic constraint (`K extends keyof T`) buy you over `any`?

With `any`, the compiler basically stops helping you. You can pass any key, get any return type back, and TypeScript won't complain until something breaks at runtime — if you even notice.

`K extends keyof T` ties the key to the object you're working with. In exercise 1, `getField(product, "price")` correctly returns a `number`, and `getField(product, "name")` returns a `string`. If you try `"colour"`, it fails at compile time because that's not a key on `Product`. Same with `withField` — you can't pass a string as the new value for `"price"` because `T[K]` knows that field is a number.

The constraint also lets you build on top of the relationship between key and value. For `sumBy`, I used a `NumericKeys` helper so only fields that are actually numbers (like `"price"`) are allowed. With `any`, nothing would stop you calling `sumBy(products, "name")` and then trying to add strings together.

So the short version: constraints keep the link between what you pass in and what you get back. `any` throws that away.

---

## 2. When would you use a mapped type vs a utility type like `Pick`?

`Pick` is great when you want a standard transformation and the built-in does exactly what you need. In exercise 2, `Pick<Product, "id" | "name">` gave me `ProductPreview` without retyping those fields by hand. Same for `Partial`, `Omit`, and `Record` — they're ready-made and everyone knows what they mean.

Mapped types are for when you need something custom that doesn't exist as a built-in, or you want to control the shape yourself. In exercise 3 I wrote my own `ReadOnly<T>` and `Nullable<T>` by mapping over `keyof T` and changing each property. Exercise 3c's `Getters<T>` went further — remapping keys with `` `get${Capitalize<string & K>}` `` to turn `theme` into `getTheme()`. You can't get that from `Pick`.

My rule of thumb: reach for `Pick` / `Omit` / `Partial` when the job is straightforward. Write a mapped type when you're transforming keys, combining conditions, or building a pattern that's specific to your domain.

---

## 3. What is the difference between `unknown` and `any`, and why is a type guard safer than a cast?

`any` disables type checking. Once something is `any`, you can call methods on it, access properties, pass it anywhere — and TypeScript won't warn you if you're wrong.

`unknown` is the opposite. It says "I don't know what this is yet," and you *have* to narrow it before you use it. You can't just do `value.email` on an `unknown` — the compiler blocks that until you've checked.

In exercise 5, `parseUser` takes `unknown` (like raw JSON) and only returns a `User` if `isUser` passes. The guard checks it's an object, not null, and that `id` is a number and `email` is a string. After that check, TypeScript knows it's a `User`.

A cast like `value as User` skips all of that. You're telling the compiler "trust me" without proving anything at runtime. If the data is wrong, you find out when the app crashes — not when you're writing the code. The guard does the same narrowing but earns it with an actual runtime check, so bad data gets caught early instead of slipping through.

---

## 4. How does the `never` exhaustiveness check in the reducer protect you?

In exercise 6, every action in the union has its own `case` in the switch. The `default` branch does this:

```ts
const _exhaustive: never = action;
```

After handling `"FETCH"`, `"RESOLVE"`, `"REJECT"`, and `"RESET"`, TypeScript knows `action` in `default` should be impossible — its type should be `never`. If you've covered everything, that line is fine.

But if someone adds a new action like `{ type: "CANCEL" }` to `Action<T>` and forgets a case for it, `action` in `default` is no longer `never`. It's `{ type: "CANCEL" }`. Assigning that to `never` is a compile error, so you can't merge or deploy without fixing the reducer.

It's basically a safety net for when the action union grows. Instead of silently falling through to a runtime throw (or worse, returning the wrong state), the compiler forces you to handle the new case. That's especially useful on a team — the type system catches the missing branch before it hits production.
