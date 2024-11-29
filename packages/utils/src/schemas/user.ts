import { z } from "zod";
import { emailSchema } from "./email";
import { intSchema } from "./int";

export const userSchema = z.object({
  id: z.string().uuid(),
  email: emailSchema,
  name: z.string(),
  age: intSchema.nonnegative(),
});

export type User = z.infer<typeof userSchema>;
