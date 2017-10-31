import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppService } from 'core/services/app.service';
import { HeaderComponent } from 'core/components/header/header.component';
import { CoreRoutingModule } from 'core/core-routing.module';

import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AppService,
      ],
    };
  }
}
