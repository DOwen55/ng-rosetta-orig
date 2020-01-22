import { TestBed } from '@angular/core/testing';

import { FruitService } from './fruit.service';

describe('FruitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitService = TestBed.get(FruitService);
    expect(service).toBeTruthy();
  });
});
