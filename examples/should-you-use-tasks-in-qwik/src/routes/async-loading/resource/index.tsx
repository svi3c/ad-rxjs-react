import {
  Resource,
  component$,
  useResource$,
  useSignal,
} from "@builder.io/qwik";
import { search } from "~/api/search";

export default component$(() => {
  const query = useSignal("");
  const results = useResource$(async ({ track }) => {
    track(() => query.value);
    if (!query.value) return [];
    return search(query.value);
  });
  return (
    <div>
      <input
        type="text"
        onInput$={(e) =>
          (query.value = (
            e.target as HTMLInputElement
          ).value)
        }
      />
      <Resource
        value={results}
        onResolved={(res) => (
          <ul>
            {res.map((result, idx) => (
              <li key={idx}>{result}</li>
            ))}
          </ul>
        )}
        onPending={() => <div>Loading...</div>}
        onRejected={(err) => (
          <div>Error: {err.message}</div>
        )}
      />
    </div>
  );
});
