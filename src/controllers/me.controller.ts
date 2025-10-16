import { createFactory } from "hono/factory";
import * as profileService from "../services/profile.service";
import { customLogger } from "../utils/logger";

const factory = createFactory();

export const getProfile = factory.createHandlers(async (c) => {
  try {
    const profileData = await profileService.handleProfileData();
    return c.json(profileData);
  } catch (error) {
    customLogger(error, "handleProfileData");
    return c.json(
      { status: 500, message: "Failed to retrieve profile data" },
      500
    );
  }
});
