import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  player = 0;

  constructor(private gameServ: GameService) {
    this.gameServ.playerHealth.subscribe((health) => {
      this.player = health;
    });
  }

  ngOnInit(): void {}
}
