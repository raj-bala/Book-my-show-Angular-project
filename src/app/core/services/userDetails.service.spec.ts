
import {UserDetailService} from './userDetails.service';
import { TestBed } from '@angular/core/testing';
import { JSON_SERVER_URLS } from '../../shared/config';
import { environment } from '../../../environments/environment';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
@Injectable()
class StoreMock {
    // How we did it before
    select =  jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
  }
beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [UserDetailService, {provide: Store, useClass: StoreMock}, ],
        imports: [HttpClientTestingModule]
      });


  });
describe('AdminService', () => {

    function setup() {
        const sharedService = TestBed.get(UserDetailService);
        const httpTestingController = TestBed.get(HttpTestingController);
        return { sharedService, httpTestingController };
      }


  it('should run #addNewUser()', async () => {
    const { sharedService, httpTestingController } = setup();
    const USERS_URL = environment.JSONSERVER + JSON_SERVER_URLS.USER_DETAILS;
    const data = {
        id: 'id',
        name: 'name',
        image: 'image',
        email: 'email'
    };
    sharedService.addNewUser(data);

    const req = httpTestingController.expectOne(USERS_URL);

    expect(req.request.method).toBe('GET');

    req.flush(
     {users : []}
    );
    const reqPut = httpTestingController.expectOne(USERS_URL);

    expect(reqPut.request.method).toBe('PUT');

    reqPut.flush(
     {users : ''}
    );
  });
  it('should run #addNewUser() error case', async () => {
    const { sharedService, httpTestingController } = setup();
    const USERS_URL = environment.JSONSERVER + JSON_SERVER_URLS.USER_DETAILS;
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';
    sharedService.addNewUser(data);

    const req = httpTestingController.expectOne(USERS_URL);

    expect(req.request.method).toBe('GET');

    req.flush(
    data, mockErrorResponse
    );

  });


  afterEach(() => {
    const { httpTestingController } = setup();
    httpTestingController.verify();
  });
});
