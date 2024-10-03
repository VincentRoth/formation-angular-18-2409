import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListComponent } from './animal-list.component';
import { AnimalListItemComponent } from '../animal-list-item/animal-list-item.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalListItemComponent],
      imports: [RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
