import {
  Directive,
  ElementRef,
  Input,
  type DoCheck,
  type OnDestroy,
  type OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { type Subscription } from 'rxjs';
import queryString from 'query-string';

const selector = 'routerLinkActiveWithoutQuery';

@Directive({
  selector: `[${selector}]`,
})
export class RouterLinkActiveWithoutQueryDirective
  implements OnInit, OnDestroy, DoCheck
{
  @Input(selector) linkPathProps: string;

  #subscription: Subscription;
  #isActive: boolean;

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit() {
    this.#subscription = this.router.events.subscribe(() => {
      const parsedUrl = queryString.parseUrl(this.router.url);
      this.#isActive = this.linkPathProps === parsedUrl.url;
    });
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }

  ngDoCheck() {
    const el = <HTMLElement>this.el.nativeElement;
    this.#isActive ? el.classList.add('active') : el.classList.remove('active');
  }
}
