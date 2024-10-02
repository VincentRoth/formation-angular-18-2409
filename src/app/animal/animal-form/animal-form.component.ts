import { Component, OnInit, ViewChild } from '@angular/core';
import { Animal } from '../../shared/api/models/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.scss',
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;
  @ViewChild('animalForm') animalForm: NgForm;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      // Edition
      this.animalService.get(id).subscribe((animal) => {
        this.animal = animal;
      });
    } else {
      // Creation
      this.animal = { name: '', species: '' };
    }
  }

  onSubmit(): void {
    if (this.animalForm.invalid) {
      return;
    }

    this.animalService.save(this.animal).subscribe((data) => {
      this.router.navigate(['/animals', data.id]);
    });
  }
}
