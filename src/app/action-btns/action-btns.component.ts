import { Component, OnInit } from '@angular/core';

import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-action-btns',
  templateUrl: './action-btns.component.html',
  styleUrls: ['./action-btns.component.css'],
})
export class ActionBtnsComponent implements OnInit {
  constructor(public gameServ: GameService) {}

  ngOnInit(): void {}

  onAttack = () => {
    this.gameServ.playerAttacks();

    if (this.gameServ.checkWin()) return;

    this.gameServ.monsterAttacks();
    this.gameServ.checkWin();
  };

  onSpecialAttack = () => {
    this.gameServ.playerAttacks(10, 20, true);

    if (this.gameServ.checkWin()) return;

    this.gameServ.monsterAttacks();
    this.gameServ.checkWin();
  };

  onHeal = () => {
    this.gameServ.healPlayer();
  };

  onGiveup = () => {
    this.gameServ.stopGame();
  };

  onStartGame = () => {
    this.gameServ.startGame();
  };
}
