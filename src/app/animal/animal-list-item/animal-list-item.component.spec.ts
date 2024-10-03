import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListItemComponent } from './animal-list-item.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('AnimalListItemComponent', () => {
  let component: AnimalListItemComponent;
  let fixture: ComponentFixture<AnimalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListItemComponent],
      imports: [RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalListItemComponent);
    component = fixture.componentInstance;
    component.model = { name: 'Name', species: 'Species' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
