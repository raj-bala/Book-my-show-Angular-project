
import {AdminService} from './admin.service';
import { TestBed } from '@angular/core/testing';
import { TMDB_URLS, JSON_SERVER_URLS, BASE_URL } from '../../shared/config';
import { environment } from '../../../environments/environment';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [AdminService],
        imports: [HttpClientTestingModule]
      });
  });
describe('AdminService', () => {

    function setup() {
        const sharedService = TestBed.get(AdminService);
        const httpTestingController = TestBed.get(HttpTestingController);
        return { sharedService, httpTestingController };
      }

  it('should run #newTheater() success case', async () => {
    const { sharedService, httpTestingController } = setup();
    sharedService.newTheater();
    const THEATERS_URL = environment.JSONSERVER + JSON_SERVER_URLS.THEATER_URL;
    const req = httpTestingController.expectOne(THEATERS_URL);

    expect(req.request.method).toBe('GET');

    req.flush({
      theaters: ['Laxmi complex']
    });
    const reqPut = httpTestingController.expectOne(THEATERS_URL);

    expect(reqPut.request.method).toBe('PUT');

    reqPut.flush({
      theaters: ['Laxmi complex']
    });


  });

  it('should run #newTheater() error case 1', async () => {
    const { sharedService, httpTestingController } = setup();
    sharedService.newTheater();
    const THEATERS_URL = environment.JSONSERVER + JSON_SERVER_URLS.THEATER_URL;
    const req = httpTestingController.expectOne(THEATERS_URL);
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';
    expect(req.request.method).toBe('GET');

    req.flush(  data, mockErrorResponse);


  });
  it('should run #newTheater() error case 2', async () => {
    const { sharedService, httpTestingController } = setup();
    sharedService.newTheater();
    const THEATERS_URL = environment.JSONSERVER + JSON_SERVER_URLS.THEATER_URL;
    const req = httpTestingController.expectOne(THEATERS_URL);
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';
    expect(req.request.method).toBe('GET');

    req.flush({
        theaters: ['Laxmi complex']
      });
    const reqPut = httpTestingController.expectOne(THEATERS_URL);

    expect(reqPut.request.method).toBe('PUT');

    reqPut.flush(
        data, mockErrorResponse
    );


  });
  it('should run #searchMovie()', async () => {
    const SEARCH_URL = BASE_URL.TMDB_API + TMDB_URLS.SEARCH_URL;
    const { sharedService, httpTestingController } = setup();
    const movieResult = {};
    sharedService.searchMovie('it').subscribe(data => {
      expect(data.mapData).toEqual(movieResult);
    });

    const req = httpTestingController.expectOne(SEARCH_URL + environment.API_KEY + '&query=' + 'it');

    expect(req.request.method).toBe('GET');

    req.flush({
      mapData: movieResult
    });
  });

  it('should run #saveNowPlaying()', async () => {
      const nowPlaying = [1];
      const theaterId = '123';
      const { sharedService, httpTestingController } = setup();
      sharedService.saveNowPlaying(nowPlaying, theaterId);
      const THEATERS_URL = environment.JSONSERVER + JSON_SERVER_URLS.THEATER_URL;
      const req = httpTestingController.expectOne(THEATERS_URL);

      expect(req.request.method).toBe('GET');

      req.flush({
        theaters: [{id: '123'}]
      });
      const reqPut = httpTestingController.expectOne(THEATERS_URL);

      expect(reqPut.request.method).toBe('PUT');

      reqPut.flush({
        theaters: ['Laxmi complex']
      });


  });

  afterEach(() => {
    const { httpTestingController } = setup();
    httpTestingController.verify();
  });
});
