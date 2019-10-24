import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
