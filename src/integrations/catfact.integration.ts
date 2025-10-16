import { customLogger } from "../utils/logger";

export const getCatFact = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log("🚀 ~ data:", data);
    return data.fact;
  } catch (error) {
    customLogger(error, "getCatFact");
    return 500;
  }
};
