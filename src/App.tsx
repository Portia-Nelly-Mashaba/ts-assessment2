export function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "0 auto", padding: 24 }}>
      <h1>TypeScript — Assessment 2 (Advanced Types)</h1>
      <p>
        Complete every file in <code>src/exercises/</code> (01 → 10). Run{" "}
        <code>npm run typecheck</code> until zero errors, then <code>npm test</code>.
      </p>
      <p>One rule: <strong>no <code>any</code></strong>. Use <code>unknown</code>, generics, and precise types instead.</p>
    </main>
  );
}
