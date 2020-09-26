import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css'],
})
export class HealthBarComponent implements OnInit {
  width = 40;

  constructor() {}

  ngOnInit(): void {}

  changeWidth = () => {
    if (this.width <= 90) {
      this.width += 10;
    }
  };
}
