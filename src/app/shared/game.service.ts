import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  playerHealth = new BehaviorSubject(100);
  monsterHealth = new BehaviorSubject(100);
  isGameRunning = new BehaviorSubject(false);
  turns: { isPlayer: boolean; text: string }[] = [];

  constructor() {}

  startGame() {
    this.playerHealth.next(100);
    this.monsterHealth.next(100);
    this.isGameRunning.next(true);
    this.turns = [];
  }

  stopGame() {
    if (confirm('Do you really want to give up?')) {
      this.isGameRunning.next(false);
    }
  }

  playerAttacks(min = 3, max = 10, special = false) {
    const damage = this.calculateDamage(min, max);
    const health = this.monsterHealth.getValue() - damage;
    let text = 'Player hits monster for ' + damage;

    if (special) {
      text = 'Player hits monster hard for ' + damage;
    }

    this.monsterHealth.next(health);
    this.turns.unshift({
      isPlayer: true,
      text,
    });
  }

  monsterAttacks(min = 5, max = 12) {
    const damage = this.calculateDamage(min, max);
    const health = this.playerHealth.getValue() - damage;

    this.playerHealth.next(health);
    this.turns.unshift({
      isPlayer: false,
      text: 'Monster hits player for ' + damage,
    });
  }

  healPlayer() {
    const health = this.playerHealth.getValue();
    if (health <= 90) {
      this.playerHealth.next(health + 10);
    } else {
      this.playerHealth.next(100);
    }

    this.turns.unshift({
      isPlayer: true,
      text: 'Player heals for 10',
    });

    this.monsterAttacks();
  }

  checkWin() {
    if (this.monsterHealth.getValue() <= 0) {
      if (confirm('You won! New Game?')) {
        this.startGame();
      } else {
        this.stopGame();
      }

      return true;
    } else if (this.playerHealth.getValue() <= 0) {
      if (confirm('You lost! New Game?')) {
        this.startGame();
      } else {
        this.stopGame();
      }

      return true;
    }

    return false;
  }

  private calculateDamage = (min, max) =>
    Math.max(Math.floor(Math.random() * max) + 1, min);
}
