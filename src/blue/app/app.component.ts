import { Component } from '@angular/core';

import { AppService } from 'core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blue';

  constructor(private appService: AppService) {

  }
}
