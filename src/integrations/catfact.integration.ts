import { customLogger } from "../utils/logger.ts";

export const getCatFact = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error(`Failed to fetch cat fact: ${response.statusText}`);
    }
    const data = await response.json();
    return data.fact;
  } catch (error) {
    customLogger(error, "getCatFact");
    throw error;
  }
};
