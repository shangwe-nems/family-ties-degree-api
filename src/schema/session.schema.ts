import { TypeOf, object, string } from "zod";

export const createSessionSchema = object({
  body: object({
    password: string({
      required_error: "password is required",
    }),
    email: string({
      required_error: "email is required",
    }),
  }),
});
