import { Component, OnDestroy, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/models/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.scss',
})
export class AnimalDetailsComponent implements OnInit, OnDestroy {
  animal: Animal;
  private subscription?: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.animalService.get(Number(id)).subscribe((data) => {
        this.animal = data;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
