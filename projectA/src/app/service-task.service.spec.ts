import { TestBed } from '@angular/core/testing';

import { ServiceTaskService } from './service-task.service';

describe('ServiceTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTaskService = TestBed.get(ServiceTaskService);
    expect(service).toBeTruthy();
  });
});
