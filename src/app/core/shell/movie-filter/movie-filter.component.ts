import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {
  selectedLanguage = '';
  selectedGenre = '';
  languageList = [{ id: 'en', name: 'English' }, { id: 'ja', name: 'Japanese' }, { id: 'zh', name: 'Chinese' }];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  openSearchPage(): void {
    this.router.navigate(['/search']);
  }
  // getLanguage(lang) {
  //   this.selectedLanguage = lang;
  // }

  // getGenre(g) {
  //   this.selectedGenre = g;
  // }
}
