import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StoreEndpoints } from 'src/app/shared/store/endpoints';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArticleService {
  #apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  deleteArticle(slug: string) {
    const url = `${this.#apiUrl}${StoreEndpoints.ALL_FEEDS}/${slug}`;
    return this.http.delete<{}>(url);
  }
}
