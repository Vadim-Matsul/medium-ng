import { Injectable } from '@angular/core';
import {
  type HttpHandler,
  type HttpInterceptor,
  type HttpRequest,
} from '@angular/common/http';

import { PersistentService } from './persistent.service';
import { StorageKeys } from '../common/storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistentService: PersistentService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.persistentService.get(StorageKeys.Token);

    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        token ? `Bearer ${token}` : ''
      ),
    });

    return next.handle(request);
  }
}
