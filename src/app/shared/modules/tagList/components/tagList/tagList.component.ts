import { Component, Input } from '@angular/core';

import { type PopularTagsModel } from 'src/app/shared/models/popularTag.model';

@Component({
  selector: 'ma-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.scss'],
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTagsModel;
}
