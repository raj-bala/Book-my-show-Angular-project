import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { PreBookingComponent } from './pre-booking.component';

describe('PreBookingComponent', () => {
  let component: PreBookingComponent;
  let fixture: ComponentFixture<PreBookingComponent>;
  beforeEach(() => {
    const matDialogRefStub = { close: () => ({}) };
    const matDialogStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatDialogModule],
      declarations: [PreBookingComponent],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MatDialog, useValue: matDialogStub },
        { provide: MAT_DIALOG_DATA, useValue: matDialogStub }

      ]
    });
    fixture = TestBed.createComponent(PreBookingComponent);
    component = fixture.componentInstance;
  });
  it('can load instance of the component', () => {
    expect(component).toBeTruthy();
  });
  describe('onNoClick', () => {
    it('makes expected calls', () => {
      const matDialogRefStub = fixture.debugElement.injector.get(
        MatDialogRef
      );
      const matDialogStub = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogRefStub, 'close').and.callThrough();
      component.onNoClick();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
