import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BaseLayoutComponent,
} from './layouts';

const COMPONENTS = [
  BaseLayoutComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class SharedModule { }
