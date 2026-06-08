/* Created by Lars-Inge Andresen */

/* External resources */
import { z } from "zod";
import { zfd } from "zod-form-data";

export const userSchema = z.object({
  login: z.string().min(2, {
    message:
      "Enter correct username/login. All lowercase letter and no spaces.",
  }),
});
