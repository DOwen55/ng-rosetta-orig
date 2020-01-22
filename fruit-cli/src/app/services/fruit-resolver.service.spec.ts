import { TestBed } from '@angular/core/testing';

import { FruitDetailResolver } from './fruit-resolver.service';

describe('FruitResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitDetailResolver = TestBed.get(FruitDetailResolver);
    expect(service).toBeTruthy();
  });
});
