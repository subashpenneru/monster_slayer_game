import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonsterComponent } from './monster/monster.component';
import { PlayerComponent } from './player/player.component';
import { HealthBarComponent } from './shared/health-bar/health-bar.component';
import { ActionBtnsComponent } from './action-btns/action-btns.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    PlayerComponent,
    HealthBarComponent,
    ActionBtnsComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
