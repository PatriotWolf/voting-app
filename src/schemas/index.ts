import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
});

export const CreatePollSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'You must include a title.' })
    .max(200, { message: 'Title must contain a maximum of 200 characters.' }),
  description: z.string().optional(),
  endDate: z.union([z.string().nonempty(), z.date()]),
  options: z
    .array(
      z.object({
        text: z.string().min(1),
      })
    )
    .min(2, { message: 'You must include at least two options.' })
    .max(5, { message: 'You must include at most five options.' }),
});

export type CreatePoll = z.infer<typeof CreatePollSchema>;
