
import { Component, OnInit, Input, AfterContentChecked, DoCheck, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HomeFilterPipe } from '../../../shared/pipes/home-filter.pipe';
import { SortMoviePipe } from '../../../shared/pipes/sort-movie.pipe';
import {SortNamePipe} from '../../../shared/pipes/sort-name.pipe';
import * as UserState from '../../../reducers/index';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-s-dialog-cards',
  templateUrl: './s-dialog-cards.component.html',
  styleUrls: ['./s-dialog-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SDialogCardsComponent implements AfterContentChecked, DoCheck, OnInit, OnDestroy {
  @Input() movieList;
  @Input() movieFilter;
  @Input() languageList;
  @Input() selectedLanguage;
  @Input() movieSort;
  userPreference: any = [];
  subscription;

  constructor(private userStore: Store<UserState.State>) {}

  ngOnInit(): void {
   this.subscription = this.userStore.select(UserState.userSelector).subscribe(result => {
      this.userPreference = result.preference;
    });
  }

  ngAfterContentChecked() {}

  ngDoCheck(): void { }
  track(_index, item) {
    return item;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
