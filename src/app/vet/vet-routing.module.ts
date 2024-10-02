import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { hasRightGuard } from '../shared/auth/has-right.guard';
import { Right } from '../shared/auth/right.enum';

const routes: Routes = [
  {
    path: '',
    component: VetComponent,
    children: [
      { path: '', component: VetListComponent },
      {
        path: ':id',
        component: VetDetailsComponent,
        canActivate: [hasRightGuard],
        data: { right: Right.VET_GET },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}
