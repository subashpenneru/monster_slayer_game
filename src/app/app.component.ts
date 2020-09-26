import { Component } from '@angular/core';

import { GameService } from './shared/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'monsterGame';

  constructor(public gameServ: GameService) {}
}
