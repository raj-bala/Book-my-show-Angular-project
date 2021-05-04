import { User } from 'src/app/core/models/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') input: MatInput;
  constructor(private router: Router) { }

  authFlag = false;
  userID: string;
  signUpFlag = false;
  adminFlag = false;
  userDetails: User;

  ngOnInit() {
  }
  openSearchPage(): void {
    this.router.navigate(['/search']);
  }

}
