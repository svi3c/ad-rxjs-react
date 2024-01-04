import { createServer } from "http";

createServer((req, res) => {
  res.end("Node!");
}).listen(3000);
