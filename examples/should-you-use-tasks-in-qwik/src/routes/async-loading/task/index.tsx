import {
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { search } from "~/api/search";

export default component$(() => {
  const query = useSignal("");
  const loading = useSignal(false);
  const results = useSignal<string[]>([]);

  useTask$(({ track }) => {
    track(() => query.value);
    if (!query.value) {
      results.value = [];
      return;
    }
    loading.value = true;
    search(query.value).then((res) => {
      results.value = res;
      loading.value = false;
    });
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
      {loading.value ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {results.value.map((result, idx) => (
            <li key={idx}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
});
