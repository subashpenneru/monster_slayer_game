import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css'],
})
export class HealthBarComponent implements OnInit {
  @Input() width: number;

  constructor() {}

  ngOnInit(): void {}
}
