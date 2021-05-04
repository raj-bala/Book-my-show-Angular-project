
import { TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import {HomeComponent} from './home.component';
import {HomeService} from '../../services/home.service';
import { of } from 'rxjs';

@Injectable()
class StoreMock {
    select = jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
}

@Injectable()
class MockHomeService {
    getNowshowing(page) {}
    getUpcomingMovies(page) {}
    getGenres() {}
 }

describe('HomeComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        { provide: Store, useClass: StoreMock },
        {provide: HomeService, useClass: MockHomeService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    const result = component.ngOnInit();
  });

  it('should run #getNewSetofNowPlayingMovies()', async () => {
      const page = '3';
    const result = component.getNewSetofNowPlayingMovies(page);
  });

  it('should run #getNewSetofComingMovies()', async () => {
      const page = '3';
    const result = component.getNewSetofComingMovies(page);
  });

});
