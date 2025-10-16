import { appendFileSync } from "node:fs";

export const customLogger = (err: any, location: string) => {
  const logMessage = `[${new Date().toISOString()}] Error at ${location}: ${
    err.stack || err
  }\n`;
  appendFileSync("error.log", logMessage);
};
