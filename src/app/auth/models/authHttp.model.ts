import { z } from 'zod';

import { registerFormModelSchema } from './register.model';
import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';
import { currentUserModelSchema } from 'src/app/shared/models/currentUser.model';

export const authRequestModelSchema = z.object({
  user: registerFormModelSchema,
});
export type AuthRequestModel = z.infer<typeof authRequestModelSchema>;

export const authResponseModelSchema = z.object({
  user: currentUserModelSchema,
});
export type AuthResponseModel = z.infer<typeof authResponseModelSchema>;

export const authBackendErrorsModelSchema = z.object({
  errors: backendErrorsModelSchema,
});
export type AuthBackendErrorsModel = z.infer<
  typeof authBackendErrorsModelSchema
>;
