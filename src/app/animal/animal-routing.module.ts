import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalComponent } from './animal.component';
import { hasRightGuard } from '../shared/auth/has-right.guard';
import { Right } from '../shared/auth/right.enum';
import { AnimalFormComponent } from './animal-form/animal-form.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent,
    children: [
      { path: '', component: AnimalListComponent },
      {
        path: 'new',
        component: AnimalFormComponent,
      },
      {
        path: 'edit/:id',
        component: AnimalFormComponent,
      },
      {
        path: ':id',
        component: AnimalDetailsComponent,
        canActivate: [hasRightGuard],
        data: { right: Right.ANIMAL_GET },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
