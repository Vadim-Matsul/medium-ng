import { Component, Input, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

import { UtilsService } from 'src/app/shared/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ma-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  baseUrl = this.location.getBaseHref();
  readonly #interval = 5;
  pages: number[];
  #pagesCount: number;

  @Input('total') totalProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('limit') limitProps = environment.limit;

  constructor(
    private location: LocationStrategy,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.initializeValues();
  }

  private initializeValues() {
    this.#pagesCount = Math.ceil(this.totalProps / this.limitProps);

    const allowStart = Math.min(
      Math.max(this.currentPageProps - this.#interval, 0),
      this.#pagesCount - this.limitProps
    );

    let allowEnd = this.currentPageProps + this.#interval;

    if (allowStart === 0) {
      allowEnd = this.limitProps;
    }

    this.calculatePagePagination(allowStart, allowEnd);
  }

  private calculatePagePagination(start: number, end: number) {
    const fullPagination = this.utilsService.range(1, this.#pagesCount);
    this.pages = fullPagination.slice(start, end);
  }

  onSlideLeft() {
    const allowStart = Math.max(this.pages.at(0)! - 2, 0);
    const allowEnd = Math.max(
      this.pages.at(this.pages.length - 1)! - 1,
      this.limitProps
    );

    this.calculatePagePagination(allowStart, allowEnd);
  }

  onSlideRight() {
    const allowStart = Math.min(
      this.pages.at(0)!,
      this.#pagesCount - this.limitProps
    );
    const allowEnd = Math.min(
      this.pages.at(this.pages.length - 1)! + 1,
      this.#pagesCount
    );

    this.calculatePagePagination(allowStart, allowEnd);
  }
}
