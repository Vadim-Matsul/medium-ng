import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { TAG_SLUG } from 'src/app/tagFeed/tagFeed-routing.module';
import { type PopularTagsModel } from 'src/app/shared/models/popularTag.model';
import { HttpLinks } from './../../../../common/httpLinks';

@Component({
  selector: 'ma-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.scss'],
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: PopularTagsModel;
  HttpLinks = HttpLinks;

  currentRouteTag$: Observable<string>;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.currentRouteTag$ = this.router.params.pipe(
      map((params) => <string>params[TAG_SLUG])
    );
  }
}
