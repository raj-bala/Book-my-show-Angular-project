import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
@Component({
  selector: 'app-payment-booking',
  templateUrl: './payment-booking.component.html',
  styleUrls: ['./payment-booking.component.scss']
})
export class PaymentBookingComponent implements OnInit {
  firstParam;
  secondParam;
  thirdParam;
  fourthParam;
  fiveParam;
  newPayment = this.fb.group({
    name: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expirationMonth: ['', Validators.required],
    expirationYear: ['', Validators.required],
    cvv: ['', [Validators.required, Validators.minLength(3)]]
  });
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private fb: FormBuilder) {
    this.firstParam = this.route.snapshot.params.movieTitle;
    this.secondParam = this.route.snapshot.params.theatre;
    this.thirdParam = this.route.snapshot.params.time;
    this.fourthParam = this.route.snapshot.params.seat;
    this.fiveParam = this.route.snapshot.params.total;
  }

  ngOnInit() { }
  openConfirmDialog() {
    if (this.newPayment.valid) {
      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        disableClose: true,
        data: {
          name: this.firstParam, theater: this.secondParam,
          time: this.thirdParam, seat: this.fourthParam, total: this.fiveParam
        }
      });
    } else {
      alert('please fill the form');
    }
  }
}


