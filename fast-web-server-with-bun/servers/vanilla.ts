import { file, serve } from "bun";

export async function startVanilla() {
  serve({
    async fetch(req) {
      const { pathname } = new URL(req.url);
      switch (pathname) {
        case "/":
          return new Response("Hello World!");
        case "/json":
          if (req.method === "POST") {
            const j = await req.json();
            return new Response(
              JSON.stringify(j).length.toString(),
            );
          }
          return new Response(
            file("./servers/fixtures/large-json.json"),
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
      }
      if (pathname.startsWith("/params/"))
        return new Response(pathname.slice(8));
      return new Response("Not Found", { status: 404 });
    },
    port: 9004,
  });
}
