import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Store } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import { AddTheaterComponent } from '../../components/add-theater/add-theater.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  theaterList;
  @ViewChild('newTherater') newTherater: AddTheaterComponent;
  constructor(private adminService: AdminService, private store: Store<MovieState.State>) {}

  ngOnInit() {
    this.store.select(MovieState.theaterList).subscribe(result => {
      this.theaterList = Object.values(result);
    });
  }

  addTheater(formData) {
    this.adminService.newTheater(formData);
  }
  canDeactivate() {
    return this.newTherater.canDeactivate();
  }
}
