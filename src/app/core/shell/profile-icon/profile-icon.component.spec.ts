import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIconComponent } from './profile-icon.component';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '../../../../../node_modules/@angular/core';
import { Observable, Observer, of } from '../../../../../node_modules/rxjs';
import { MatDialog, MatMenuModule } from '../../../../../node_modules/@angular/material';
import { AuthService } from '../../../../../node_modules/angular-6-social-login';
import { LoginService } from '../../services/login.service';
import { UserDetailService } from '../../services/userDetails.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Store } from '../../../../../node_modules/@ngrx/store';
import { UiService } from '../../../shared/services/ui-service.service';


@Injectable()
class MockMatDialog { }

@Injectable()
class MockAuthService {
    signIn(val) {
        return new Promise((resolve, reject) => {
            if (val === 'google') {


                const obj = {
                    id: 'id',
                    name: 'name',
                    email: 'email',
                    image: 'image',
                    token: 'token',
                    role: 'role'
                };
                resolve(obj);
            } else {
                reject('Other the Google login is not supported');
            }
        });
    }
    signOut() {
        return new Promise((resolve, reject) => {
            const obj = {
                id: 'id',
                name: 'name',
                email: 'email',
                image: 'image',
                token: 'token',
                role: 'role'
            };
            resolve(obj);
        });
}
}

@Injectable()
class MockLoginService {
    getUserData() {
        return Observable.create((observer: Observer<{ name: string, users: Array<{ uid: string, preferences: {}, ratings: {} }> }>) => {
            observer.next({
                name: 'User',
                users: [{ 'uid': 'id', 'preferences': {}, ratings: {} }, { 'uid': 'uid', 'preferences': {}, ratings: {} }]
            });
            return observer;
        });
    }
}
@Injectable()
class StoreMock {
    select = jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
}

class MockRouter {
    navigate(path) { }
}

@Injectable()
class MockUserDetailService {
    addNewUser(userData) { }
}

@Injectable()


@Injectable()


@Injectable()
class MockUiService { }

describe('ProfileIconComponent', () => {
  let component: ProfileIconComponent;
  let fixture: ComponentFixture<ProfileIconComponent>;
  let userService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [MatMenuModule],
        declarations: [
          ProfileIconComponent
        ],
        providers: [
            { provide: MatDialog, useClass: MockMatDialog },
            { provide: AuthService, useClass: MockAuthService },
            { provide: LoginService, useClass: MockLoginService },
            { provide: UserDetailService, useClass: MockUserDetailService },
            { provide: Router, useClass: MockRouter },
            { provide: Store, useClass: StoreMock },
            { provide: UiService, useClass: MockUiService },
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(ProfileIconComponent);
    component = fixture.debugElement.componentInstance;
    userService = new MockAuthService();
});
it('should create', () => {
  expect(component).toBeTruthy();
});

it('should create a component', async () => {
    expect(component).toBeTruthy();
});

it('should run #socialSignIn() for google', async () => {
    const socialPlatform = 'google';
    const result = component.socialSignIn(socialPlatform);
});
it('should run #socialSignIn() for  other', async () => {
    const socialPlatform = 'other';
    const result = component.socialSignIn(socialPlatform);
});

it('should run #socialSignOut()', async () => {
    const socialPlatform = 'google';
    const result = component.socialSignOut(socialPlatform);
});

it('should run #loadProfile()', async () => {
    const result = component.loadProfile();
});

it('should run #validate()', async () => {
    const result = component.validate();
});

it('should run #ngOnInit()', async () => {
    const result = component.ngOnInit();
});


});
