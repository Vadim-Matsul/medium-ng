import { z } from 'zod';

import { backendErrorsModelSchema } from 'src/app/shared/models/backendErrors.model';

export const settingsStateModelSchema = z.object({
  isSubmitting: z.boolean(),
  validationErrors: backendErrorsModelSchema.nullable(),
});
export type SettingsStateModel = z.infer<typeof settingsStateModelSchema>;
