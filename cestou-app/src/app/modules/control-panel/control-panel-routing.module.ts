import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './control-panel.component';

//pages
import { ProfileComponent } from './pages/profile/profile.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const controlPanelRoutes: Routes = [
  {
    path: '', component: ControlPanelComponent,
    children: [
      { path: 'home', component: UserHomeComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(controlPanelRoutes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule { }
