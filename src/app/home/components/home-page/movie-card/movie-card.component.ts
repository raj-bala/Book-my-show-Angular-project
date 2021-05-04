import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FormControl } from '@angular/forms';
import {  TMDB_URLS } from '../../../../shared/config';
import { PreBookingComponent } from '../../../../shared/components/pre-booking/pre-booking.component';
import { SeatReservationModalComponent } from '../../../../shared/components/seat-reservation-modal/seat-reservation-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnChanges {
  @Input()
  movie;
  @Input()
  theaterList;
  @Input()
  category;

  imagesPath = TMDB_URLS.IMAGE_URL;
  castCrewPath = TMDB_URLS.CAST_CREW_SMALL;
  movieName = 'Robot 2.O';
  dialogResult;
  totalReviews = 51;

  minDate = new Date();
  date = new FormControl(this.minDate);
  selectTheater: FormControl;
  selectedTheater;
  selectedTime;
  voteCount: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {}

  ngOnChanges() {
    this.selectTheater = new FormControl();
    this.selectTheater.setValue(this.theaterList[0]);
    this.selectedTheater = this.theaterList[0];
    this.selectTheater.valueChanges.subscribe(selectedTheater => {
      this.selectedTheater = selectedTheater;
    });
  }
  onValChange(val: string) {
    this.selectedTime = val;
  }
  isInvalid() {
    if (this.selectedTheater && this.selectedTheater.name) {
      return false;
    }
    return true;
  }
  checKToDialog() {
    this.category === 'nowPlaying' ? this.openDialog() : this.preBookDialog();
  }
  preBookDialog() {
    const dialogRef = this.dialog.open(PreBookingComponent, {
      disableClose: true
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SeatReservationModalComponent, {
      width: sessionStorage.getItem('authDetails') ? window.innerWidth + 'px' : 'auto',
      height: sessionStorage.getItem('authDetails') ? '599px' : 'auto',
      data: { category: this.category },
      disableClose: true
    });

    const bookingInstance = dialogRef.componentInstance;
    bookingInstance.movieTitle = this.movie.title;
    bookingInstance.screen = this.selectedTheater && this.selectedTheater.name;
    bookingInstance.time = this.selectedTime;
    bookingInstance.movieList = this.movie;
  }

  trackCastandCrew(index, cast) {
    if (cast) {
      return cast.id;
    } else {
      return -1;
    }
  }
}
