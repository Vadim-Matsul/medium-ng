import { z } from 'zod';

export const popularTagModelSchema = z.string();
export const popularTagsModelSchema = z.array(popularTagModelSchema);

export type PopularTagModel = z.infer<typeof popularTagModelSchema>;
export type PopularTagsModel = z.infer<typeof popularTagsModelSchema>;
