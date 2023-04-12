import { Injectable } from '@angular/core';
import { type SafeParseReturnType } from 'zod';

import { type BackendErrorsModel } from '../models/backendErrors.model';

type SafeParseData = SafeParseReturnType<
  Record<string, string>,
  Record<string, string>
>;

@Injectable()
export class ZodService {
  constructor() {}

  getErrorsMap(safeParseData: SafeParseData) {
    if (safeParseData.success) {
      return null;
    }

    const errorsMap = safeParseData.error.formErrors.fieldErrors;

    const filteredErrors = Object.entries(errorsMap).reduce(
      (acc, [key, errors]) => {
        acc[key] = errors!.filter(Boolean);
        return acc;
      },
      <BackendErrorsModel>{}
    );

    return filteredErrors;
  }
}
