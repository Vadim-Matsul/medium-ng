import { z } from 'zod';

import { popularTagsModelSchema } from 'src/app/shared/models/popularTag.model';

export const popularTagsStateModelSchema = z.object({
  isLoading: z.boolean(),
  error: z.string().nullable(),
  data: popularTagsModelSchema.nullable(),
});
export type PopularTagsStateModel = z.infer<typeof popularTagsStateModelSchema>;
