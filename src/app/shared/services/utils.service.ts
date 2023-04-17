import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  range(start: number, end: number) {
    return Array.from({ length: end }, (_, idx) => (idx += start));
  }
}
