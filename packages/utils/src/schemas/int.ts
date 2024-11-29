import { z } from "zod";

export const intSchema = z.number().int();

export type Int = z.infer<typeof intSchema>;
