import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule' ,
    pathMatch: 'full'
  },
  {
      path: 'home',
      loadChildren: 'app/home/home.module#HomeModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
