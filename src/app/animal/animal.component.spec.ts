import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalComponent } from './animal.component';
import { RouterModule } from '@angular/router';

describe('AnimalComponent', () => {
  let component: AnimalComponent;
  let fixture: ComponentFixture<AnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
