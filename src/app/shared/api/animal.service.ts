import { Injectable } from '@angular/core';
import { Animal } from './models/animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private endpoint = '/api/animals';

  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(this.endpoint + '/' + id);
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.endpoint);
  }

  create(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(this.endpoint, animal);
  }

  update(animal: Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(this.endpoint + '/' + animal.id, animal);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.endpoint + '/' + id);
  }
}
