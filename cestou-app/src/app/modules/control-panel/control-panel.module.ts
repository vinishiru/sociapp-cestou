import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ControlPanelRoutingModule } from './control-panel-routing.module';

//pages
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { ProfileComponent } from './pages/profile/profile.component';

//components
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavMenuItemComponent } from './components/side-nav-menu-item/side-nav-menu-item.component';
import { FormPersonInfoComponent } from './components/form-person-info/form-person-info.component';
import { FormAddressComponent } from './components/form-address/form-address.component';
import { FormPasswordComponent } from './components/form-password/form-password.component';
import { ControlPanelComponent } from './control-panel.component';

import { NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from 'src/app/custom-errors';
import { GranteesComponent } from './pages/grantees/grantees.component';
import { FormGranteeComponent } from './components/form-grantee/form-grantee.component';

@NgModule({
  declarations: [
    ControlPanelComponent,
    SideNavComponent,
    SideNavMenuItemComponent,
    UserHomeComponent,
    ProfileComponent,
    PageHeaderComponent,
    FormPersonInfoComponent,
    FormAddressComponent,
    FormPasswordComponent,
    GranteesComponent,
    FormGranteeComponent
  ],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  providers: [
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true
    }
  ]
})
export class ControlPanelModule { }
