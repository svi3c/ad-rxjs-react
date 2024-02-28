export async function search(query: string) {
  if (!query) return [];
  await sleep(500);
  return [query + "0", query + "1", query + "2"];
}

async function sleep(duration: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, duration),
  );
}
