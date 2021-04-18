import { TestBed } from '@angular/core/testing';

import { MapindiaService } from './mapindia.service';

describe('MapindiaService', () => {
  let service: MapindiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapindiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
