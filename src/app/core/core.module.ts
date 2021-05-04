import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from './../app-routing.module';
import { UserDetailService } from 'src/app/core/services/userDetails.service';
import { HeaderComponent } from './shell/header/header.component';
import { AuthService } from 'angular-6-social-login';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';
import { LogoComponent } from './shell/logo/logo.component';
import { ProfileIconComponent } from './shell/profile-icon/profile-icon.component';
import { MovieFilterComponent } from './shell/movie-filter/movie-filter.component';
// import { SignInService } from './services/signin.service';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('211481144823-tvupluah139i5bdcqdpnaeqdmeu9rfbd.apps.googleusercontent.com')
    }
  ]);
  return config;
}

@NgModule({
  declarations: [ HeaderComponent, LogoComponent, ProfileIconComponent, MovieFilterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [UserDetailService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AuthService
  ],
  exports: [MaterialModule, HeaderComponent]
})
export class CoreModule { }
