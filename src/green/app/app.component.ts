import { Component } from '@angular/core';

import { AppService } from 'core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'green';

  constructor(private appService: AppService) {

  }
}
