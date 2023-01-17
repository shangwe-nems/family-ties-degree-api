import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "name is required",
    }),
    password: string({
      required_error: "password is required",
    }).min(6, "Password too short - should be at least 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),
    email: string({
      required_error: "email is required",
    }).email("not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
