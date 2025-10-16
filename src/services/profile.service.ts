import * as catFactIntegration from "../integrations/catfact.integration.js";
import { PROFILE_DATA } from "../models/profile.model.js";
import { customLogger } from "../utils/logger.js";

export const handleProfileData = async () => {
  try {
    const catFact = await catFactIntegration.getCatFact();
    if (catFact === 500) {
      return 500;
    }
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
