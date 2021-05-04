import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import {
  MatDialogModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaymentBookingComponent } from './components/payment-booking/payment-booking.component';
import { SortMoviePipe } from './pipes/sort-movie.pipe';
import { HomeFilterPipe } from './pipes/home-filter.pipe';

import { MovieBookingComponent } from './components/movie-booking/movie-booking.component';
import { SeatReservationModalComponent } from './components/seat-reservation-modal/seat-reservation-modal.component';
import { MovieDropdownsComponent } from './components/movie-dropdowns/movie-dropdowns.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { PreBookingComponent } from './components/pre-booking/pre-booking.component';
import { SortNamePipe } from './pipes/sort-name.pipe';

@NgModule({
  declarations: [
    MovieBookingComponent,
    SeatReservationModalComponent,
    MovieDropdownsComponent,
    ConfirmationModalComponent,
    PaymentBookingComponent,
    SortMoviePipe,
    HomeFilterPipe,
    SortNamePipe,
    PreBookingComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    MovieBookingComponent,
    SeatReservationModalComponent,
    MovieDropdownsComponent,
    SortMoviePipe,
    HomeFilterPipe,
    SortNamePipe,
    PreBookingComponent
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }],
  entryComponents: [ConfirmationModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
