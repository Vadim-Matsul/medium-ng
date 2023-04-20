import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { createArticleRequestModelSchema } from '../models/createArticleHttp.model';
import {
  articleResponseModelSchema,
  type ArticleResponseModel,
} from 'src/app/shared/models/posts/articleHttp.model';
import { type ArticleFormModel } from 'src/app/shared/models/posts/feed.model';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {
  #apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createArticle(data: ArticleFormModel) {
    const api = `${this.#apiUrl}${StoreEndpoints.ALL_FEEDS}`;
    const body = createArticleRequestModelSchema.parse({ article: data });

    return this.http
      .post<ArticleResponseModel>(api, body)
      .pipe(map((response) => articleResponseModelSchema.parse(response).article));
  }
}
