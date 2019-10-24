import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { BaseLayoutComponent } from '../base-layout/base-layout.component';


@NgModule({
  declarations: [
    BaseLayoutComponent,
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
