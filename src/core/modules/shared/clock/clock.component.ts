import { Component } from '@angular/core';
import { timer } from 'rxjs/Observable/timer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  date = timer(1000, 1000).map(() => new Date());
}
