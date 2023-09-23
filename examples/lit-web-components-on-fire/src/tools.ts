export function randomColor() {
  const hex = [1, 2, 3]
    .map(() => Math.floor(Math.random() * 8).toString(16))
    .join("");
  return `#${hex}`;
}
