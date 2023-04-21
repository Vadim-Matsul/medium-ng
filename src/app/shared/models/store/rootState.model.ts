import { z } from 'zod';

import { feedStateModelSchema } from '../../modules/feed/models/feedState.model';
import { popularTagsStateModelSchema } from '../../modules/popularTags/models/popularTagsState.model';
import { authStateModelSchema } from 'src/app/auth/models/authState.model';
import { createArticleStateModelSchema } from 'src/app/createArticle/models/createArticleState.model';
import { editArticleStateModelSchema } from 'src/app/editArticle/models/editArticleState.model';
import { settingsStateModelSchema } from 'src/app/settings/models/settingsState.model';
import { StoreSlices } from '../../store/slices';

export const rootStateModelSchema = z.object({
  [StoreSlices.AUTH]: authStateModelSchema,
  [StoreSlices.FEED]: feedStateModelSchema,
  [StoreSlices.POPULAR_TAGS]: popularTagsStateModelSchema,
  [StoreSlices.ARTICLE_FORM]: createArticleStateModelSchema,
  [StoreSlices.ARTICLE_EDIT]: editArticleStateModelSchema,
  [StoreSlices.PROFILE_SETTINGS]: settingsStateModelSchema,
});
export type RootStateModel = z.infer<typeof rootStateModelSchema>;
