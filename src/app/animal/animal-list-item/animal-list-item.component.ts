import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/api/models/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrl: './animal-list-item.component.scss',
})
export class AnimalListItemComponent {
  @Input({ required: true }) model: Animal;
  @Output() delete = new EventEmitter<void>();

  constructor(private animalService: AnimalService) {}

  onDelete(): void {
    this.animalService.delete(this.model.id).subscribe(() => {
      this.delete.emit();
    });
  }
}
