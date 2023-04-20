import { Injectable } from '@angular/core';
import { map, type Observable } from 'rxjs';

@Injectable()
export class ControlFormService {
  constructor() {}

  getActiveFormErrors(valuesChanges: Observable<Record<string, string>>) {
    return valuesChanges.pipe(
      map((formValues) =>
        Object.fromEntries(Object.entries(formValues).filter(([_, value]) => Boolean(value)))
      )
    );
  }
}
