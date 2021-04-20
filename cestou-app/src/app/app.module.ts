import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
    FormPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
