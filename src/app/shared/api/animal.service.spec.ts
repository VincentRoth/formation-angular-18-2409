import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
