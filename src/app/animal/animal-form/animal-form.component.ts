import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/models/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.scss',
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    this.animal = { name: '', species: '' };
  }

  onSubmit(): void {
    this.animalService.create(this.animal).subscribe((data) => {
      this.router.navigate(['/animals', data.id]);
    });
  }
}
