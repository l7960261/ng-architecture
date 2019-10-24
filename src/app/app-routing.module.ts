import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: BaseLayoutComponent,
  //   children: [
  //     { path: '', component: HomeComponent },
  //   ],
  // },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
