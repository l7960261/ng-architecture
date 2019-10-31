import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { OpenService } from './open.service';


@NgModule({
  declarations: [],
  imports: [
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        OpenService,
      ]
    };
  }
}
