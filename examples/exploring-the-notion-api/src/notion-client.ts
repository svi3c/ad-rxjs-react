import {
  Client,
  collectPaginatedAPI,
  iteratePaginatedAPI,
} from "@notionhq/client";

const { API_KEY, PAGE_ID, DATABASE_ID } = Bun.env;

const client = new Client({ auth: API_KEY });

// pages
const page = await client.pages.retrieve({
  page_id: PAGE_ID!,
});

// block children

const { results: blocks } =
  await client.blocks.children.list({
    block_id: PAGE_ID!,
  });

const allBlocks = await collectPaginatedAPI(
  client.blocks.children.list,
  { block_id: PAGE_ID! },
);

for await (const block of iteratePaginatedAPI(
  client.blocks.children.list,
  { block_id: PAGE_ID! },
)) {
  // Do something with each block
}

// databases

const { results: pages } = await client.databases.query({
  database_id: DATABASE_ID!,
  sorts: [
    {
      property: "Status",
      direction: "ascending",
    },
    {
      timestamp: "last_edited_time",
      direction: "descending",
    },
  ],
  filter: {
    and: [
      {
        timestamp: "last_edited_time",
        last_edited_time: { this_week: {} },
      },
      {
        or: [
          {
            property: "Status",
            select: { equals: "Done" },
          },
          {
            property: "Status",
            select: { equals: "In Progress" },
          },
        ],
      },
    ],
  },
});
