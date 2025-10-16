import { z } from "zod";

export const profileDataSchema = z.object({
  status: z.literal("success"),
  user: z.object({
    email: z.string(),
    name: z.string(),
    stack: z.string(),
  }),
  timestamp: z.string(),
  fact: z.string(),
});

export type profileDataType = z.infer<typeof profileDataSchema>;

export const PROFILE_DATA: profileDataType = {
  status: "success",
  user: {
    name: "Okereke Chinweotito",
    email: "okerekechinweotito@gmail.com",
    stack: "Node.js/Hono",
  },
  timestamp: "",
  fact: "",
};
