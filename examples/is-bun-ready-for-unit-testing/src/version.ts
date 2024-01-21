import { promises as fs } from "fs";

export async function getVersion() {
  const packageJson = await fs.readFile(
    "package.json",
    "utf-8",
  );
  return JSON.parse(packageJson).version;
}
