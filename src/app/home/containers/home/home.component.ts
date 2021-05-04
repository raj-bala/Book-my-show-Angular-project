import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import * as UserState from '../../../reducers/index';

import { HomeService } from '../../services/home.service';
import { Subscription } from '../../../../../node_modules/rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  nowPlayingMoviesList: any = [];
  upcomingMoviesList: any = [];
  genresList: any = [];
  theaterList: any = [];
  userPreference: any = [];

  nowPlayingMovieSubs: Subscription;
  upcomingSubs: Subscription;
  theatreSubs: Subscription;
  userPrefSubs: Subscription;
  genreSubs: Subscription;

  constructor(
    private store: Store<MovieState.State>,
    private userStore: Store<UserState.State>,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.nowPlayingMovieSubs = this.store.select(MovieState.nowPlayingMoviesSelector).subscribe(result =>
      (this.nowPlayingMoviesList = result));

      this.upcomingSubs = this.store.select(MovieState.upcomingMovieSelector).subscribe(result => {
      this.upcomingMoviesList = result;
    });
    this.theatreSubs = this.store.select(MovieState.theaterList).subscribe(result => {
      this.theaterList = Object.values(result);
    });
    this.userPrefSubs = this.userStore.select(UserState.userSelector).subscribe(result => {
      this.userPreference = result.preference;
    });
    this.genreSubs = this.store.select(MovieState.genreList).subscribe(result => {
      this.genresList = Object.values(result);
    });

  }

  getNewSetofNowPlayingMovies(page) {
    this.homeService.getNowshowing(page);
  }
  getNewSetofComingMovies(page) {
    this.homeService.getUpcomingMovies(page);
  }

  ngOnDestroy() {
    if (this.nowPlayingMovieSubs && !this.nowPlayingMovieSubs.closed) {
      this.nowPlayingMovieSubs.unsubscribe();
    }
    if (this.upcomingSubs && !this.upcomingSubs.closed) {
      this.upcomingSubs.unsubscribe();
    }
    if (this.theatreSubs && !this.theatreSubs.closed) {
      this.theatreSubs.unsubscribe();
    }
    if (this.userPrefSubs && !this.userPrefSubs.closed) {
      this.userPrefSubs.unsubscribe();
    }
    if (this.genreSubs && !this.genreSubs.closed) {
      this.genreSubs.unsubscribe();
    }
  }
}
