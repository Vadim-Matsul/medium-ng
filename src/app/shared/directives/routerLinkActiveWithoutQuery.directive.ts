import {
  Directive,
  ElementRef,
  Input,
  type DoCheck,
  type OnDestroy,
  type OnInit,
} from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { type Subscription } from 'rxjs';
import queryString from 'query-string';

const selector = 'routerLinkActiveWithoutQuery';

@Directive({
  selector: `[${selector}]`,
})
export class RouterLinkActiveWithoutQueryDirective implements OnInit, OnDestroy, DoCheck {
  @Input(selector) linkPathProps: string | string[];

  #subscription: Subscription;
  #isActive: boolean;

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit() {
    this.checkUrl(this.router.url);

    this.#subscription = this.router.events.subscribe((event) => {
      if (!(event instanceof ResolveEnd)) return;
      this.checkUrl(event.url);
    });
  }

  private checkUrl(currentUrl: string) {
    const parsedUrl = queryString.parseUrl(currentUrl);

    this.#isActive = Array.isArray(this.linkPathProps)
      ? this.linkPathProps.join('') === parsedUrl.url
      : this.linkPathProps === parsedUrl.url;
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }

  ngDoCheck() {
    const el = <HTMLElement>this.el.nativeElement;
    this.#isActive ? el.classList.add('active') : el.classList.remove('active');
  }
}
