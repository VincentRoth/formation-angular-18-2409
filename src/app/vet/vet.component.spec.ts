import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetComponent } from './vet.component';
import { RouterModule } from '@angular/router';

describe('VetComponent', () => {
  let component: VetComponent;
  let fixture: ComponentFixture<VetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
