import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppService } from './services/app.service';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    HeaderComponent,
    RouterModule,
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
