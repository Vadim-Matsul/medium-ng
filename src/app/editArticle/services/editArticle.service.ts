import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { editArticleRequestModelSchema } from '../models/editArticleHttp.model';
import {
  articleResponseModelSchema,
  type ArticleResponseModel,
} from 'src/app/shared/models/posts/articleHttp.model';
import { type ArticleFormModel } from 'src/app/shared/models/posts/feed.model';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class EditArticleService {
  #apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  updateArticle(slug: string, data: ArticleFormModel) {
    const api = `${this.#apiUrl}${StoreEndpoints.ALL_FEEDS}/${slug}`;
    const body = editArticleRequestModelSchema.parse({ article: data });

    return this.http
      .put<ArticleResponseModel>(api, body)
      .pipe(map((response) => articleResponseModelSchema.parse(response).article));
  }
}
