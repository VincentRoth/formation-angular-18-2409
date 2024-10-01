import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';

@NgModule({
  declarations: [AnimalDetailsComponent, AnimalListComponent, AnimalListItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalDetailsComponent, AnimalListComponent],
})
export class AnimalModule {}
