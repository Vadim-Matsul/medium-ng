import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { type ArticleResponseModel } from 'src/app/shared/models/posts/articleHttp.model';
import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class FavoritesService {
  #apiUrl = `${environment.apiUrl}${StoreEndpoints.ALL_FEEDS}/slug/favorite`;

  private getArticle(response: ArticleResponseModel) {
    return feedModelSchema.parse(response.article);
  }

  addToFavorites(articleSlug: string) {
    const api = this.#apiUrl.replace('slug', articleSlug);
    return this.http.post<ArticleResponseModel>(api, {}).pipe(map(this.getArticle));
  }

  removeFromFavorites(articleSlug: string) {
    const api = this.#apiUrl.replace('slug', articleSlug);
    return this.http.delete<ArticleResponseModel>(api).pipe(map(this.getArticle));
  }

  constructor(private http: HttpClient) {}
}
