import { z } from 'zod';

import { currentUserWithPasswordModelSchema } from 'src/app/shared/models/currentUser.model';

export const settingsFormModelSchema = currentUserWithPasswordModelSchema.omit({
  token: true,
});
export type SettingsFormModel = z.infer<typeof settingsFormModelSchema>;
