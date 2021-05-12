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
      { path: 'home', component: UserHomeComponent, data: { animation: 'Default' } },
      { path: 'profile', component: ProfileComponent, data: { animation: 'Default' } },
      {
        path: 'grantees', component: GranteesComponent, data: { animation: 'Default' },
        children: [
          { path: 'grantee/:id', component: FormGranteeComponent, data: { animation: 'Default' } },
          { path: 'grantee', component: FormGranteeComponent, data: { animation: 'Default' } }

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
