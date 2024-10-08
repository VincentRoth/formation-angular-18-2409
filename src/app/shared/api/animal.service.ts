import { Injectable } from '@angular/core';
import { Animal } from './models/animal';
import { AbstractRestApiService } from './abstract-rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalService extends AbstractRestApiService<Animal> {
  constructor() {
    super('/api/animals');
  }
}
