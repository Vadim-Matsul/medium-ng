import { Component, type OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { type Observable } from 'rxjs';

import { getPopularTagsAction } from '../../store/actions/getPopularTags.actions';
import { type PopularTagsStateModel } from '../../models/popularTagsState.model';
import {
  errorMessageSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Component({
  selector: 'ma-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  HttpLinks = HttpLinks;

  tags$: Observable<PopularTagsStateModel['data']>;
  isLoading$: Observable<PopularTagsStateModel['isLoading']>;
  error$: Observable<PopularTagsStateModel['error']>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues() {
    this.tags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorMessageSelector));
  }

  private fetchData() {
    this.store.dispatch(getPopularTagsAction());
  }
}
