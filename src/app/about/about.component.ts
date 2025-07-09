import { Component, OnInit } from '@angular/core';
import PureCounter from '@srexi/purecounterjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initCounter();
  }

  initCounter(): void {
    new PureCounter();
  }
}
