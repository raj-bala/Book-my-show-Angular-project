
import { TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MovieCardComponent } from './movie-card.component';
import { MatDialog } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { HomeComponent } from 'src/app/home/containers/home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../material.module';


describe('MovieCardComponent', () => {
    let fixture;
    let component;
    const activeModal: any = jasmine.createSpyObj('activeModal', {
        'open': {
            afterClosed: function () {
                return true;
            },
            componentInstance: {
                movieTitle : 'it',
                screen : '3',
                time: '23:00',
                movieList : []
            }
        }
    })
        ;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule,
                BrowserAnimationsModule,
                FormsModule, RouterTestingModule.withRoutes([]), HomeRoutingModule, ReactiveFormsModule],
            declarations: [
                MovieCardComponent,
                HomeComponent
            ],
            providers: [
                MatDialog,
                { provide: MatDialog, useValue: activeModal }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(MovieCardComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create a component', async () => {
        expect(component).toBeTruthy();
    });

    it('should run #ngOnInit()', async () => {
        const result = component.ngOnInit();
    });

    it('should run #ngOnChanges()', async () => {
        component.theaterList = [{ id: '' }];
        const result = component.ngOnChanges();
    });

    it('should run #onValChange()', async () => {
        const val = '';
        const result = component.onValChange(val);
    });

    it('should run #isInvalid()', async () => {
        const result = component.isInvalid();
    });

    it('should run #checKToDialog()', async () => {
        const result = component.checKToDialog();
    });

    it('should run #preBookDialog()', async () => {
        const result = component.preBookDialog();
    });

    it('should run #openDialog()', async () => {
        component.movie = { title: 'IT' };
        component.openDialog();
    });

    it('should run #trackCastandCrew() by passing wrong obj', async () => {
        const index = 1;
        const cast = '';
        const result = component.trackCastandCrew(index, cast);
    });
    it('should run #trackCastandCrew() by passing right obj', async () => {
        const index = 1;
        const cast = {
            id: '1234'
        };
        const result = component.trackCastandCrew(index, cast);
    });

});
