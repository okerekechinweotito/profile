import { serve } from "@hono/node-server";
import app from "./app.ts";
import { customLogger } from "./utils/logger.ts";

const port = Number(process.env.PORT) || 3000;
const server = serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Server is running on port ${info.port}`);
});

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});

process.on("SIGTERM", () => {
  server.close((error) => {
    if (error) {
      customLogger(error, "SIGTERM");
      process.exit(1);
    }
    process.exit(0);
  });
});
