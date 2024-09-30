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
      phoneNumber: '01.23.45.67.89',
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
