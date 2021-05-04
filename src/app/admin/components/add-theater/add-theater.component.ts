import { Component, OnInit, Output, EventEmitter, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Observable } from '../../../../../node_modules/rxjs';
import { DeactivationGuarded } from '../../../core/auth/service/canexit.service';


@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTheaterComponent implements OnInit, DeactivationGuarded {

  newTheater = this.fb.group({
    tid: ['', Validators.required],
    name: ['', Validators.required],
    city: ['', Validators.required],
    gLocation: ['', Validators.required],
    parkingfacilities: ['', Validators.required],
    capacity: ['', Validators.compose([Validators.required, this.capcityValidator()])]
  });

  @Output() addTheater = new EventEmitter();
  @ViewChild('successDialog') successDialog: TemplateRef<any>;

  constructor(private fb: FormBuilder, private matDialog: MatDialog) {
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.newTheater.valid) {
      this.matDialog.open(this.successDialog);
      this.addTheater.emit(this.newTheater.value);
    }
  }
  get theaterFormControl() {
    return this.newTheater.controls;
  }
  dialogOk() {
    this.newTheater.reset();
    this.matDialog.closeAll();
  }
  capcityValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      if ( control.value !== null && (isNaN(control.value) || control.value < 20  || control.value > 200)) {
        return {'capcityValidator': true };
      }
      return null;
    };
  }

  canDeactivate(): boolean {
    if (this.newTheater.dirty) {
      const confirmResult = window.confirm('Are you sure you want to leave this page ? ');
      if (confirmResult === true) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
