import type {
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface Schema {
  blogPost: BlogPostTable;
  comment: CommentTable;
}

export interface BlogPostTable {
  id: Generated<number>;
  title: string;
}

export type BlogPost = Selectable<BlogPostTable>;
export type NewBlogPost = Insertable<BlogPostTable>;
export type BlogPostUpdate = Updateable<BlogPostTable>;

export interface CommentTable {
  id: Generated<number>;
  postId: number;
  text: string;
}

export type Comment = Selectable<CommentTable>;
export type NewComment = Insertable<CommentTable>;
export type CommentUpdate = Updateable<CommentTable>;
