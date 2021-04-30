import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from './custom-errors';
import { NgxMaskModule, IConfig } from 'ngx-mask';

//modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//shared components
import { AppToastComponent } from './shared/components/app-toast/app-toast.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { NavBarBottomComponent } from './shared/components/nav-bar-bottom/nav-bar-bottom.component';

export const options: Partial<IConfig> = {
  validation: false
};

@NgModule({
  declarations: [
    AppComponent,
    AppToastComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    NavBarComponent,
    NavBarBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
