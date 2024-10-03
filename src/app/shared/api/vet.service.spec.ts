import { TestBed } from '@angular/core/testing';

import { VetService } from './vet.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('VetService', () => {
  let service: VetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(VetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
