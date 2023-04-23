import { Component, Input } from '@angular/core';

import { AuthorModel } from 'src/app/shared/models/author.model';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Component({
  selector: 'ma-profile-toggler',
  templateUrl: './profileToggler.component.html',
  styleUrls: ['./profileToggler.component.scss'],
})
export class ProfileTogglerComponent {
  HttpLinks = HttpLinks;
  @Input('author') authorProps: AuthorModel;
  @Input('isFavorite') isFavoriteProps: boolean;
}
