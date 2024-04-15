import { beforeEach, describe, expect, it } from "bun:test";
import { db, getLastInsertRowId } from "../core/db";
import type { NewBlogPost } from "../core/schema";
import {
  createComment,
  createPost,
  getAllPostsWithCommentCounts,
  getPostById,
} from "./blog-datasource";

beforeEach(async () => {
  await db.deleteFrom("comment").execute();
  await db.deleteFrom("blogPost").execute();
});

describe("createPost()", () => {
  it("should create a new post", async () => {
    const post = await createPost({
      title: "Hello, world!",
    });

    expect(post).toEqual({
      id: expect.any(Number),
      title: "Hello, world!",
    });
    expect([post]).toEqual(await selectAllPosts());
  });
});

describe("getPostById()", () => {
  it("should return a post by id", async () => {
    const post = { title: "Hello world" };
    const id = await insertPost(post);

    expect(await getPostById(id)).toEqual({ ...post, id });
  });
});

describe("createComment()", () => {
  it("should create a new comment", async () => {
    const id = await insertPost({
      title: "Hello, world!",
    });
    const comment = await createComment({
      postId: id,
      text: "Hello",
    });

    expect(comment).toEqual({
      id: expect.any(Number),
      postId: id,
      text: "Hello",
    });
    expect([comment]).toEqual(await selectAllComments());
  });
});

describe("getAllPostsWithCommentCounts()", () => {
  it("should return all posts with comment counts", async () => {
    const id1 = await insertPost({
      title: "Hello, world!",
    });
    const id2 = await insertPost({
      title: "Hello, world!",
    });
    await createComment({
      postId: id1,
      text: "Hello",
    });
    await createComment({
      postId: id1,
      text: "Hello",
    });
    await createComment({
      postId: id2,
      text: "Hello",
    });

    expect(await getAllPostsWithCommentCounts()).toEqual([
      { id: id1, title: "Hello, world!", commentCount: 2 },
      { id: id2, title: "Hello, world!", commentCount: 1 },
    ]);
  });
});

function selectAllPosts() {
  return db.selectFrom("blogPost").selectAll().execute();
}

async function insertPost(post: NewBlogPost) {
  await db.insertInto("blogPost").values(post).execute();
  return getLastInsertRowId();
}

async function selectAllComments() {
  return db.selectFrom("comment").selectAll().execute();
}
