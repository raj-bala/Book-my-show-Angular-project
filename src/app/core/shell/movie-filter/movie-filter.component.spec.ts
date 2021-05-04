import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilterComponent } from './movie-filter.component';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA, inject } from '../../../../../node_modules/@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { Router } from '../../../../../node_modules/@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Injectable()
class MockMatDialog { }

class MockRouter {
  navigate(path) { }
}
describe('MovieFilterComponent', () => {
  let component: MovieFilterComponent;
  let fixture: ComponentFixture<MovieFilterComponent>;
  const mockRoute = {
    navigate: jasmine.createSpy('navigate')
  };

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
  ],
      declarations: [
        MovieFilterComponent
      ],
      providers: [
          { provide: MatDialog, useClass: MockMatDialog },
          { provide: Router, useClass: MockRouter },
          { provide: Router, useValue: mockRoute },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }).compileComponents();
  fixture = TestBed.createComponent(MovieFilterComponent);
  component = fixture.debugElement.componentInstance;
});

it('should create component', () => {
expect(component).toBeTruthy();
});

it('should run #ngOnInit()', async () => {
  const result = component.ngOnInit();
});

it('should run #openSearchPage()', async () => {
  component.openSearchPage();
});
it('should click link', () => {
  fixture.detectChanges();
  component = fixture.componentInstance;
  component.openSearchPage();
  expect(mockRoute.navigate).toHaveBeenCalledWith(['/search']);
});

});
