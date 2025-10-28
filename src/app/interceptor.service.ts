import {Injectable} from '@angular/core';
import {
  HTTP_INTERCEPTORS, HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {interval, Observable} from 'rxjs';
import {catchError, finalize, tap, timeout} from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      // timeout(5000),
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if ([200, 201].indexOf(event.status) !== -1) {
            // console.log('success')
          }
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if ([401, 403].indexOf(err.status) !== -1) {
          // if (err.status === 401 || err.status === 403 || err.status === 500) {
          }
        }
      }),
        finalize(() =>
         this.loaderService.hide()
         )
    );
  }
}

export const HtpInterceptor = [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}];
// todo add token from shared service
