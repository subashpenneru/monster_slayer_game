import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css'],
})
export class MonsterComponent implements OnInit {
  monster = 0;
  constructor(private gameServ: GameService) {
    this.gameServ.monsterHealth.subscribe((health) => {
      this.monster = health;
    });
  }

  ngOnInit(): void {}
}
