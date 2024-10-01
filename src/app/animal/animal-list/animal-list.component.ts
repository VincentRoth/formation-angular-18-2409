import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/models/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss',
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animals = this.animalService.getAll();
  }

  onItemDeletion(index: number): void {
    this.animals.splice(index, 1);
  }
}
