import { Injectable } from '@angular/core';
import { Right } from './right.enum';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private rights = [Right.ANIMAL_GET, Right.VET_GET]; // droits obtenus lors de la connexion de notre utilisateur

  hasRight(right: Right): boolean {
    return this.rights.includes(right);
  }
}
