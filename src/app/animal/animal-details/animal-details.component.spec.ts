import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailsComponent } from './animal-details.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalDetailsComponent],
      imports: [RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
