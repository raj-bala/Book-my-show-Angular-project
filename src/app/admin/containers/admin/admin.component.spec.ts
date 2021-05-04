
import { TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import {AdminComponent} from './admin.component';
import { AdminService } from '../../services/admin.service';
import { of } from 'rxjs';

@Injectable()
class MockAdminService {
    newTheater(newTheater) {}
 }

@Injectable()
class StoreMock {
    // How we did it before
    select =  jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
  }

describe('AdminComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [MatDialogModule],
      declarations: [
        AdminComponent
      ],
      providers: [
        {provide: AdminService, useClass: MockAdminService},
        {provide: Store, useClass: StoreMock},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    spyOn(component, 'ngOnInit');
    const result = component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should run #addTheater()', async () => {
    spyOn(component, 'addTheater');
    const result = component.addTheater('formData');
    expect(component.addTheater).toHaveBeenCalled();
  });

});
