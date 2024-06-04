import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpXsrfTokenExtractor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private tokenExtractor: HttpXsrfTokenExtractor,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>|any,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Set Credentials (Cookie)
    request.clone({
      withCredentials: true,
    });
    if (this.tokenExtractor.getToken()) {
      let headers: HttpHeaders|any;
      if (request.headers.has('Content-Range')) {
        headers = new HttpHeaders({
          'Content-Range': request.headers.get('Content-Range'),
        });
      } else {
          let token:any = this.tokenExtractor.getToken();
          headers = new HttpHeaders({
            'X-Requested-With': 'XMLHttpRequest',
            'x-CSRFToken': token,
          });
      }
      request = request.clone({
        headers,
      });
    }

    return next.handle(request).pipe(
      map((response: HttpResponse<any>|any) => response),
      catchError((error: HttpResponse<HttpErrorResponse>) => {
        if (error.status === 403) {
          this.router.navigate(['/']);
        }
        return throwError(error);
      })
    );
  }
}
