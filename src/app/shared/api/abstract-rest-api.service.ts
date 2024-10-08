import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractRestApiService<
  T extends { id?: number | string }
> {
  private httpClient: HttpClient;

  constructor(private endpoint: string) {
    this.httpClient = inject(HttpClient);
  }

  get(id: number | string): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + '/' + id);
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.endpoint);
  }

  create(data: T): Observable<T> {
    return this.httpClient.post<T>(this.endpoint, data);
  }

  update(data: T): Observable<T> {
    return this.httpClient.put<T>(this.endpoint + '/' + data.id, data);
  }

  delete(id: number | string): Observable<void> {
    return this.httpClient.delete<void>(this.endpoint + '/' + id);
  }

  save(data: T): Observable<T> {
    if (data.id) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  }
}
