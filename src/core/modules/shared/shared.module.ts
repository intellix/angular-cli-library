import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { ClockComponent } from './clock/clock.component';

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
