import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/models/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.scss',
})
export class AnimalDetailsComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animal = this.animalService.get();
  }
}
