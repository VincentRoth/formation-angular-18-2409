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
      email: 'test@email.test',
    };
  }

  getAll(): Animal[] {
    return [
      {
        id: 1,
        name: 'Mon animal 1',
        species: 'dog',
      },
      {
        id: 2,
        name: 'Mon animal 2',
        species: 'dog',
      },
      {
        id: 3,
        name: 'Mon animal 3',
        species: 'dog',
      },
    ];
  }
}
