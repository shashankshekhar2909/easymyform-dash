import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const csrfToken = this.getCsrfToken();
    console.log('CSRF Token:', csrfToken);  // Debug log
    const clonedRequest = req.clone({
      withCredentials: true,
      setHeaders: csrfToken ? { 'X-CSRFToken': csrfToken } : {}
    });
    console.log('Request Headers:', clonedRequest.headers);  // Debug log
    return next.handle(clonedRequest);
  }

  private getCsrfToken(): string | null {
    if (typeof document !== 'undefined') {
      const name = 'csrftoken';
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1];
      return cookieValue ? decodeURIComponent(cookieValue) : null;
    }
    return null;
  }
}
