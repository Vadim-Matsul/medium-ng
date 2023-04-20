import { Pipe, type PipeTransform } from '@angular/core';
import { map, type Observable } from 'rxjs';
import { type SafeParseReturnType } from 'zod';

type InputPipe = Observable<SafeParseReturnType<Record<string, string>, Record<string, string>>>;

@Pipe({
  name: 'zodError',
})
export class ZodErrorPipe implements PipeTransform {
  transform(zod$: InputPipe) {
    return zod$.pipe(
      map((result) => {
        if (result.success) {
          return null;
        }

        const errors = result.error.errors.map((error) => error.message);
        return errors.at(0)!;
      })
    );
  }
}
