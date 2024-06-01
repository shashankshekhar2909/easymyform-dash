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
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Set Credentials (Cookie)
    request.clone({
      withCredentials: true,
    });
    if (this.tokenExtractor.getToken()) {
      let headers: HttpHeaders;
      if (request.headers.has('Content-Range')) {
        headers = new HttpHeaders({
          'Content-Range': request.headers.get('Content-Range'),
        });
      } else {
        if (!request.url.startsWith('https://storage.googleapis.com/')) {
          headers = new HttpHeaders({
            'X-Requested-With': 'XMLHttpRequest',
            'x-CSRFToken': this.tokenExtractor.getToken(),
          });
        }
      }
      request = request.clone({
        headers,
      });
    }

    return next.handle(request).pipe(
      map((response: HttpResponse<any>) => response),
      catchError((error: HttpResponse<HttpErrorResponse>) => {
        if (error.status === 403) {
          this.router.navigate(['/']);
        }
        return throwError(error);
      })
    );
  }
}
