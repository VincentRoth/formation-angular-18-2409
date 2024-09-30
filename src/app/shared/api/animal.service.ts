import { Injectable } from '@angular/core';
import { Animal } from './models/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      name: 'Mon animal du service',
      species: 'dog',
    };
  }
}
