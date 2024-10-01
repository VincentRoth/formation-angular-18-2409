import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const timeInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = Date.now();
  return next(req).pipe(
    finalize(() => {
      const endTime = Date.now();
      console.log(`${req.method} ${req.url} a pris ${endTime - startTime}ms`);
    })
  );
};
