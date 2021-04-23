import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'control-panel',
    loadChildren: () => import('./modules/control-panel/control-panel.module').then(m => m.ControlPanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
