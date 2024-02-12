const { API_KEY, PAGE_ID } = Bun.env;

const res = await fetch(
  `https://api.notion.com/v1/pages/${PAGE_ID}`,
  {
    headers: {
      "Notion-Version": "2022-06-28",
      Authorization: `Bearer ${API_KEY}`,
    },
  },
);

const page = await res.json();

console.log(JSON.stringify(page, null, 2));
