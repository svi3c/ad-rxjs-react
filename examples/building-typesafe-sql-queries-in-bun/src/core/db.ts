import { Kysely, Migrator, sql } from "kysely";
import { BunWorkerDialect } from "kysely-bun-worker";
import { migrationProvider } from "./migrations";
import type { Schema } from "./schema";

const dialect = new BunWorkerDialect();
export const db = new Kysely<Schema>({ dialect });

await sql`PRAGMA foreign_keys = ON;`.execute(db);

await new Migrator({
  db,
  provider: migrationProvider,
}).migrateToLatest();

export async function getLastInsertRowId(): Promise<number> {
  const {
    rows: [{ id }],
  } = await sql<{
    id: number;
  }>`SELECT last_insert_rowid() AS id`.execute(db);
  return id;
}
