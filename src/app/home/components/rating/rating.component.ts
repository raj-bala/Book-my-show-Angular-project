import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {

  rating = new Array(5);
  @Input()
  movie;
  halfStar = false;
  constructor() {
   }

  ngOnInit() {
  }
  get ratingMovie(): any[] {
    const voteCount = Math.floor(this.movie.vote_average / 2);
    const count = (this.movie.vote_average / 2) - voteCount;
    for (let i = 0; i <= 4; i++) {
        this.rating[i] = i < voteCount ? 'star' : 'notstar';
    }
    if (count) {
      this.rating[voteCount] = 'half';
    } else {
      this.halfStar = false;
    }
    return this.rating;
  }

}
