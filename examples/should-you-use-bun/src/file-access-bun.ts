const file = Bun.file("package.json");

const text = await file.text();
const json = await file.json();
const stream = file.stream();
const buffer = await file.arrayBuffer();
