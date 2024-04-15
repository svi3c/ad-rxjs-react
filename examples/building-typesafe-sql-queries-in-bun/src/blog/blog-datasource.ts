import { db, getLastInsertRowId } from "../core/db";
import type {
  BlogPost,
  Comment,
  NewBlogPost,
  NewComment,
} from "../core/schema";

export async function createPost(
  post: NewBlogPost,
): Promise<BlogPost> {
  await db.insertInto("blogPost").values(post).execute();
  const id = await getLastInsertRowId();
  return {
    id,
    ...post,
  };
}

export async function getPostById(
  id: number,
): Promise<BlogPost | null> {
  const dbo = await db
    .selectFrom("blogPost")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
  return dbo ?? null;
}

export async function createComment(
  comment: NewComment,
): Promise<Comment> {
  await db.insertInto("comment").values(comment).execute();
  const id = await getLastInsertRowId();
  return {
    id,
    ...comment,
  };
}

export function getAllPostsWithCommentCounts(): Promise<
  Array<{
    id: number;
    title: string;
    commentCount: number;
  }>
> {
  return db
    .selectFrom("blogPost")
    .innerJoin("comment", "comment.postId", "blogPost.id")
    .select(({ fn }) => [
      "blogPost.id",
      "blogPost.title",
      fn.count<number>("comment.id").as("commentCount"),
    ])
    .groupBy("blogPost.id")
    .execute();
}
