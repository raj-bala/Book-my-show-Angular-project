
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SDialogCardsComponent } from './s-dialog-cards.component';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { SortMoviePipe } from 'src/app/shared/pipes/sort-movie.pipe';
import { Store } from '@ngrx/store';
import { HomeFilterPipe } from '../../../shared/pipes/home-filter.pipe';
import { of } from '../../../../../node_modules/rxjs';
import { SortNamePipe } from '../../../shared/pipes/sort-name.pipe';

@Injectable()
class StoreMock {
    select = jasmine.createSpy().and.returnValue(of('quote'));
    dispatch = jasmine.createSpy();
}
describe('SDialogCardsComponent', () => {
  let component: SDialogCardsComponent;
  let fixture: ComponentFixture<SDialogCardsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SDialogCardsComponent, HomeFilterPipe, SortMoviePipe, SortNamePipe],
      providers: [
        { provide: Store, useClass: StoreMock },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDialogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('can call track method', () => {
    const index = 1;
    const item = [];
    expect(component.track).toBeDefined();
    spyOn(component, 'track').and.callThrough();
    component.track(index, item);
    expect(component.track).toHaveBeenCalled();
  });
  it('should run #ngOnInit()', async () => {
    const spyOnMethod = spyOn(component, 'ngOnInit');
    const result = component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it('should call ngAfterContentChecked method', fakeAsync(() => {
    spyOn(component, 'ngAfterContentChecked').and.callThrough();
    component.ngAfterContentChecked();
    expect(component.ngAfterContentChecked).toHaveBeenCalled();
   }));
   it('should call ngDoCheck method', fakeAsync(() => {
    spyOn(component, 'ngDoCheck').and.callThrough();
    component.ngDoCheck();
    expect(component.ngDoCheck).toHaveBeenCalled();
   }));
});
