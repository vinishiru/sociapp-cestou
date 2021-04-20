import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from './custom-errors'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserHomeComponent } from './user-home/user-home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavMenuItemComponent } from './side-nav-menu-item/side-nav-menu-item.component';
import { ProfileComponent } from './profile/profile.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FormUserInfoComponent } from './form-user-info/form-user-info.component';
import { FormAddressComponent } from './form-address/form-address.component';
import { FormPasswordComponent } from './form-password/form-password.component';
import { AppToastComponent } from './app-toast/app-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    SideNavComponent,
    SideNavMenuItemComponent,
    ProfileComponent,
    PageHeaderComponent,
    FormUserInfoComponent,
    FormAddressComponent,
    FormPasswordComponent,
    AppToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  providers: [{
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
