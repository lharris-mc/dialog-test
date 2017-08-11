import { TestBed, inject } from '@angular/core/testing';

import { DialogTestService } from './dialog-test.service';

describe('DialogTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogTestService]
    });
  });

  it('should be created', inject([DialogTestService], (service: DialogTestService) => {
    expect(service).toBeTruthy();
  }));
});
