import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { MovieCardComponent } from './components/home-page/movie-card/movie-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SeatReservationModalComponent } from '../shared/components/seat-reservation-modal/seat-reservation-modal.component';
import { ConfirmationModalComponent } from '../shared/components/confirmation-modal/confirmation-modal.component';
import { PreBookingComponent } from '../shared/components/pre-booking/pre-booking.component';
import { RatingComponent } from './components/rating/rating.component';


@NgModule({
  declarations: [HomePageComponent, HomeComponent, MovieCardComponent, RatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [MaterialModule],
  entryComponents: [SeatReservationModalComponent, ConfirmationModalComponent, PreBookingComponent]
})
export class HomeModule { }
