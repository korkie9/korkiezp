import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
