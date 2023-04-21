import { z } from 'zod';

export const backendErrorsModelSchema = z.record(z.array(z.string()));
export type BackendErrorsModel = z.infer<typeof backendErrorsModelSchema>;

export const backendErrorsResponseModelSchema = z.object({
  errors: backendErrorsModelSchema,
});
export type BackendErrorsResponseModel = z.infer<typeof backendErrorsResponseModelSchema>;

export const backendErrorResponseModelSchema = z.object({
  error: z.object({
    message: z.string(),
  }),
});
export type BackendErrorResponseModel = z.infer<typeof backendErrorResponseModelSchema>;
