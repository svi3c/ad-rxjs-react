import { createReadStream, promises as fs } from "fs";

const text = await fs.readFile("package.json", "utf-8");
const json = JSON.parse(
  await fs.readFile("package.json", "utf-8"),
);
const stream = createReadStream("package.json");
const buffer = (await fs.readFile("package.json")).buffer;
