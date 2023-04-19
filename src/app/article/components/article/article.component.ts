import { Component, type OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getArticleAction } from '../../store/actions/getArticle.actions';

@Component({
  selector: 'ma-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    const mock_slug =
      'If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863';
    this.store.dispatch(getArticleAction({ slug: mock_slug }));
  }
}
