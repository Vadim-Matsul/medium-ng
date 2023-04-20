import { z } from 'zod';

import { popularTagsModelSchema } from 'src/app/shared/models/popularTag.model';

export const popularTagsResponseModelSchema = z.object({
  tags: popularTagsModelSchema,
});
export type PopularTagsResponseModel = z.infer<typeof popularTagsResponseModelSchema>;
