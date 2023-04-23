import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ma-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  isChildExists = false;
  @ContentChild('bannerChild') set bannerChildSetter(value: ElementRef | undefined) {
    this.isChildExists = !!value;
  }
}
