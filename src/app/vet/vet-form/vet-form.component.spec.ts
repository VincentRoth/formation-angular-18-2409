import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetFormComponent } from './vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('VetFormComponent', () => {
  let component: VetFormComponent;
  let fixture: ComponentFixture<VetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetFormComponent],
      imports: [ReactiveFormsModule, RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(VetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
