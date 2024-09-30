import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/models/animal';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.scss',
})
export class AnimalDetailsComponent implements OnInit {
  animal: Animal;

  ngOnInit(): void {
    this.animal = {
      name: 'Mon animal',
      species: 'dog',
    };
  }
}
