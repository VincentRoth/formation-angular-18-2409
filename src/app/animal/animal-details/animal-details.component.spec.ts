import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailsComponent } from './animal-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Animal } from '../../shared/api/models/animal';
import { of } from 'rxjs';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(async () => {
    const paramMap = new Map();
    paramMap.set('id', 1);

    await TestBed.configureTestingModule({
      declarations: [AnimalDetailsComponent],
      imports: [RouterModule.forRoot([])],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(paramMap),
            snapshot: {
              paramMap, // paramMap: paramMap
            },
          },
        },
      ],
    }).compileComponents();

    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should query animal of ID 1', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals/1');

    const animal: Animal = { id: 1, name: 'Name', species: 'Species' };
    requestCtrl.flush(animal);

    expect(component?.animal?.id).toBe(1);

    httpCtrl.verify();
  });
});
