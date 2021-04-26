import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGranteeComponent } from './components/form-grantee/form-grantee.component';
import { ControlPanelComponent } from './control-panel.component';
import { GranteesComponent } from './pages/grantees/grantees.component';

//pages
import { ProfileComponent } from './pages/profile/profile.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const controlPanelRoutes: Routes = [
  {
    path: '', component: ControlPanelComponent,
    children: [
      { path: 'home', component: UserHomeComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'grantees', component: GranteesComponent, children:
          [
            { path: 'grantee/:id', component: FormGranteeComponent }
          ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(controlPanelRoutes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule { }
