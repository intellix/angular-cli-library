import { Component } from '@angular/core';
import { timer } from 'rxjs/Observable/timer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  date = timer(1000, 1000).map(() => new Date());
}
