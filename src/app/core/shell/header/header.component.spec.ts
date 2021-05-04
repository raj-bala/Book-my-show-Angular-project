import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, Injectable } from '../../../../../node_modules/@angular/core';
import { FlexLayoutModule } from '../../../../../node_modules/@angular/flex-layout';
import { MaterialModule } from '../../../material.module';
import { HttpClientModule } from '../../../../../node_modules/@angular/common/http';
import { of } from '../../../../../node_modules/rxjs';
import { Store } from '../../../../../node_modules/@ngrx/store';
import { HeaderComponent } from './header.component';
import { Router } from '../../../../../node_modules/@angular/router';

@Injectable()
class StoreMock {
    select = jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
}
@Injectable()
class MockMatDialog { }

class MockRouter {
  navigate(path) { }
}
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockRoute = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule, MaterialModule, HttpClientModule],
        declarations: [
            HeaderComponent
        ],
        providers: [
          { provide: Store, useClass: StoreMock },
          { provide: Router, useClass: MockRouter },
          { provide: Router, useValue: mockRoute },
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create component', () => {
  expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    const spyOnMethod = spyOn(component, 'ngOnInit');
    const result = component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
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
