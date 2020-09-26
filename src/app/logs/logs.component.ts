import { Component, OnInit } from '@angular/core';

import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  constructor(public gameServ: GameService) {}

  ngOnInit(): void {}
}
