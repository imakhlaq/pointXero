import { z } from 'zod';

const userLoginInfo = z.object({
  userName: z
    .string({
      required_error: 'Username is required',
      invalid_type_error: 'Username must be a string',
    })
    .min(4, { message: 'Username must be 4 character long' }),

  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    })
    .min(5, { message: 'Password must be 5 character long' }),
});
export default userLoginInfo;

// extract the inferred type like this
export type UserLoginInfo = z.infer<typeof userLoginInfo>;
