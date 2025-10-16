import { appendFileSync } from "node:fs";
export const customLogger = (err, location) => {
    const logMessage = `[${new Date().toISOString()}] Error at ${location}: ${err.stack || err}\n`;
    appendFileSync("error.log", logMessage);
};
