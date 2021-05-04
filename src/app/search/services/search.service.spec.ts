import { TestBed, getTestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '../../../../node_modules/@angular/common/http/testing';

describe('SearchService', () => {
    let service: SearchService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         HttpClientTestingModule
      ],
    providers: [SearchService],
    }).compileComponents();

    injector = getTestBed();
    service = injector.get(SearchService);
    httpMock = injector.get(HttpTestingController);
  });


  it('should be created', () => {
    const service1: SearchService = TestBed.get(SearchService);
    expect(service1).toBeTruthy();
  });
});
