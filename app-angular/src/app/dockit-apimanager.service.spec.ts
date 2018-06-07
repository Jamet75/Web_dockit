import { TestBed, inject } from '@angular/core/testing';

import { DockitAPIManagerService } from './dockit-apimanager.service';

describe('DockitAPIManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockitAPIManagerService]
    });
  });

  it('should be created', inject([DockitAPIManagerService], (service: DockitAPIManagerService) => {
    expect(service).toBeTruthy();
  }));
});
