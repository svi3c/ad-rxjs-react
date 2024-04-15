import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("blogPost")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("title", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("comment")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("postId", "integer", (col) =>
      col.notNull().references("blogPost.id"),
    )
    .addColumn("text", "text", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("comment").execute();
  await db.schema.dropTable("blogPost").execute();
}
