import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { Store, State } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import { MovieListService } from '../../../core/movie/movie-list.service';
import {} from '../../../home/store/actions/home.action';
import { CdkVirtualScrollViewport } from '../../../../../node_modules/@angular/cdk/scrolling';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  @Input()
  moviesList;

  @Input()
  upcomingList;

  @Input()
  theaterList;

  @Output()
  getNewNowPlayingMovies: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  getNewUpcomingMovies: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;

  activeTabIndex = 0;
  page = 1;
  selectedLanguage = '';
  selectedGenre = '';
  movieObjArray = [];
  distanceList = [{ id: '10km', name: '10km' }, { id: '20km', name: '20km' }, { id: '30km', name: '30km' }];
  moviesList1: any;
  constructor(
    private store: Store<MovieState.State>,
    private movieListService: MovieListService,
  ) {}

  ngOnInit() {
    this.store.select(MovieState.nowPlayingMoviesSelector).subscribe(result => {
      this.moviesList1 = result;
      this.movieObjArray = this.movieListService.getLanguageList(this.moviesList1);
    });
  }

  trackMovie(index, movie) {
    if (movie) {
      return movie.id;
    } else {
      return -1;
    }
  }
  tabChanged(event) {
    this.activeTabIndex = event;
  }

  getLanguage(lang) {
    this.selectedLanguage = lang;
  }

  getGenre(g) {
    this.selectedGenre = g;
  }
  goTop() {
    this.virtualScroll.scrollToIndex(0);
  }
  getMovies(): void {
    if (this.virtualScroll.getDataLength() === this.virtualScroll.getRenderedRange().end) {
      if (this.activeTabIndex === 0) {
        this.getNewNowPlayingMovies.emit(++this.page);
      } else if (this.activeTabIndex === 1) {
        this.getNewUpcomingMovies.emit(++this.page);
      }
    }
  }
}
