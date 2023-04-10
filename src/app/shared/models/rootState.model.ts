import { z } from 'zod';

import { authStateModelSchema } from 'src/app/auth/models/authState.model';
import { StoreSlices } from '../store/slices';

export const rootStateModelSchema = z.object({
  [StoreSlices.AUTH]: authStateModelSchema,
});
export type RootStateModel = z.infer<typeof rootStateModelSchema>;
