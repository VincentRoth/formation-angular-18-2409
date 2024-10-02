import { Injectable } from '@angular/core';
import { AbstractRestApiService } from './abstract-rest-api.service';
import { Vet } from './models/vet';

@Injectable({
  providedIn: 'root',
})
export class VetService extends AbstractRestApiService<Vet> {
  constructor() {
    super('/api/veterinarians');
  }
}
