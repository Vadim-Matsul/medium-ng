import { z } from 'zod';

import { feedStateModelSchema } from '../modules/feed/models/feedState.model';
import { popularTagsStateModelSchema } from '../modules/popularTags/models/popularTagsState.model';
import { authStateModelSchema } from 'src/app/auth/models/authState.model';
import { StoreSlices } from '../store/slices';

export const rootStateModelSchema = z.object({
  [StoreSlices.AUTH]: authStateModelSchema,
  [StoreSlices.FEED]: feedStateModelSchema,
  [StoreSlices.POPULAR_TAGS]: popularTagsStateModelSchema,
});
export type RootStateModel = z.infer<typeof rootStateModelSchema>;
