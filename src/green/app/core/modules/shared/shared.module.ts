import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockComponent } from 'core/modules/shared/clock/clock.component';
import { FooterComponent as CoreFooterComponent } from 'core/modules/shared/footer/footer.component';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FooterComponent,
    ClockComponent,
  ],
  exports: [
    FooterComponent,
    ClockComponent,
  ],
})
export class SharedModule { }
