import { TestBed, getTestBed } from '@angular/core/testing';
import {AuthGuard} from './authguard.service';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '../../../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../../../node_modules/@angular/router/testing';

@Injectable()
class MockRouter {
    navigate(path) {}
}
  @Injectable()
class StoreMock {
    select =  jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
  }


describe('AuthGuard', () => {
    describe('canActivate', () => {
      let authGuard: AuthGuard;
      let authService;
      let router;
      let state;
      let service: AuthGuard;
      let injector: TestBed;
      const mockRoute = {
        navigate: jasmine.createSpy('navigate')
      };
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule.withRoutes([]),
        ],
            providers: [
                { provide: Router, useClass: MockRouter },
                { provide: Router, useValue: mockRoute },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        injector = getTestBed();
        service = injector.get(AuthGuard);
      });

      it('should be created', () => {
        service = TestBed.get(AuthGuard);
        expect(service).toBeTruthy();
      });

      it('should return true for a logged in user', () => {
        authService = { isLoggedIn: () => true };
        router = new MockRouter();
        state = new StoreMock();
        authGuard = new AuthGuard(router, state);
        expect(authGuard.canActivate(router, state)).toEqual(true);
      });

      it('should return true for a logged in user', () => {
        authService = { isLoggedIn: () => true };
        router = new MockRouter();
        state = new StoreMock();
        authGuard = new AuthGuard(router, state);

        expect(authGuard.canLoad(state)).toEqual(true);
      });


    });
  });
