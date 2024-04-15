import type { MigrationProvider } from "kysely";
import * as m01 from "./01-basic-schema";

export const migrationProvider: MigrationProvider = {
  async getMigrations() {
    return { m01 };
  },
};
