import * as catFactIntegration from "../integrations/catfact.integration.ts";
import { PROFILE_DATA } from "../models/profile.model.ts";
import { customLogger } from "../utils/logger.ts";

export const handleProfileData = async () => {
  try {
    const catFact = await catFactIntegration.getCatFact();
    return {
      ...PROFILE_DATA,
      fact: catFact,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    customLogger(error, "handleProfileData");
    throw error;
  }
};
