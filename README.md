# TypeScript — Assessment 2: Advanced Type Engineering

The follow-up to the basics assessment. This one tests whether you can *design*
types, not just use them: generic constraints, utility types, mapped &
conditional types, `unknown` with type guards, a typed reducer, async + a
`Result` type, template-literal types, function overloads, and a capstone module.

## Setup
```bash
npm install
```

## What to do
Complete the files in `src/exercises/` **in order**:
1. `01-generic-constraints.ts` — generic constraints, `keyof`, `T[K]`
2. `02-utility-types.ts` — Partial, Pick, Omit, Record
3. `03-mapped-types.ts` — write your own mapped types + key remapping
4. `04-conditional-types.ts` — conditional types with `infer`
5. `05-unknown-guards.ts` — `unknown` + user-defined type guards
6. `06-state-machine.ts` — discriminated-union reducer with exhaustiveness
7. `07-async-result.ts` — async typing + a generic `Result<T, E>`
8. `08-template-literals.ts` — template literal types
9. `09-overloads.ts` — function overloads
10. `10-capstone-cart.ts` — type and build a pure shopping-cart module

Each spot to change is marked `// TODO`; replace each `___` with the correct
type or code.

## Rules
- **No `any`, no `as any`, no `@ts-ignore`.** Reach for `unknown` + narrowing,
  or a precise generic, instead.
- **Do not edit `tsconfig.json`.** Strict mode stays on. Fix types, not config.
- `// @ts-expect-error` lines are intentional — they prove a rule fires. Follow
  the comment.
- Do not change the dependency versions in `package.json`.

## How you're graded
Pass all three:
```bash
npm run typecheck   # zero errors
npm test            # all tests pass
npm run dev         # app runs
```

## Deliverable
Push to a **public** GitHub repo and submit the link, plus a short **write-up**
(a `WRITEUP.md` in the repo) answering, in your own words:
- What does a generic constraint (`K extends keyof T`) buy you over `any`?
- When would you use a mapped type vs a utility type like `Pick`?
- What is the difference between `unknown` and `any`, and why is a type guard safer than a cast?
- How does the `never` exhaustiveness check in the reducer protect you?
