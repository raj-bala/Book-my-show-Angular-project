import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import { MovieListService } from '../../../core/movie/movie-list.service';
import {} from '../../../home/store/actions/home.action';
import { Genre } from '../../../home/models/genre.model';


@Component({
  selector: 'app-movie-dropdowns',
  templateUrl: './movie-dropdowns.component.html',
  styleUrls: ['./movie-dropdowns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDropdownsComponent implements OnInit {
  genresList: Genre[] = [];
  @Input() layout;
  @Input() distanceList;
  @Output() languageChange$: EventEmitter<any>;
  @Output() genreChange$: EventEmitter<any>;
  languageSelected = false;
  genreSelected = false;
  genreObj = { value: '' };
  distanceSelected = false;
  languageSelector: FormControl;
  generSelector: FormControl;
  distanceSelector: FormControl = new FormControl();
  movieObjArray = [];
  moviesList: any;
  selectedLanguage = 'en';
  constructor(
    private store: Store<MovieState.State>,
    private movieListService: MovieListService
  ) {
    this.languageChange$ = new EventEmitter();
    this.genreChange$ = new EventEmitter();
    this.languageSelector = new FormControl();
    this.generSelector = new FormControl();
  }

  ngOnInit() {
    this.store.select(MovieState.genreList).subscribe(result => {
      this.genresList = Object.values(result);
    });
    this.languageSelector.valueChanges.subscribe((value) => {
      this.languageSelected = value ? true : false;
      this.languageChange$.emit(value);
    });

    this.store.select(MovieState.nowPlayingMoviesSelector).subscribe(result => {
      this.moviesList = result;
      this.movieObjArray = this.movieListService.getLanguageList(this.moviesList);
    });

    this.generSelector.valueChanges.subscribe((value) => {
      this.genreSelected = value ? true : false;
      this.genreObj.value = value;
      this.genreObj = Object.assign({}, this.genreObj);
      this.genreChange$.emit(this.genreObj);
    });
  }
  track(_index, item) {
    return item;
  }
}
