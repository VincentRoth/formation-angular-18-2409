import { Component } from '@angular/core';
import { Vet } from '../../shared/api/models/vet';
import { VetService } from '../../shared/api/vet.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrl: './vet-details.component.scss',
})
export class VetDetailsComponent {
  vet: Vet;
  private subscription?: Subscription;

  constructor(
    private vetService: VetService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.vetService.get(id).subscribe((data) => {
        this.vet = data;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
