import { z } from "zod";
import { emailSchema } from "./email";

export const userSchema = z.object({
  id: z.string().uuid(),
  email: emailSchema,
  name: z.string(),
  age: z.number().int().nonnegative(),
});

export type User = z.infer<typeof userSchema>;
