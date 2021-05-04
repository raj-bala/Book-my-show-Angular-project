import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MovieComponent } from './containers/movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MaterialModule } from '../material.module';
import { MovieDescriptionComponent } from './components/movie-page/movie-description/movie-description.component';
import { SharedModule } from '../shared/shared.module';
import { MovieService } from './services/movie.service';
import { SeatReservationModalComponent } from '../shared/components/seat-reservation-modal/seat-reservation-modal.component';
import { PreBookingComponent } from '../shared/components/pre-booking/pre-booking.component';
import { SocialFeedsComponent } from './components/movie-page/social-feeds/social-feeds.component';

@NgModule({
  declarations: [MoviePageComponent, MovieComponent, MovieDescriptionComponent, SocialFeedsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MovieRoutingModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MaterialModule],
  entryComponents: [SeatReservationModalComponent, PreBookingComponent],
  providers: [MovieService]
})
export class MovieModule {}
