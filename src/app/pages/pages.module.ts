import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { ExitComponent } from './exit/exit.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UsersComponent,
    ChatComponent,
    HelpComponent,
    SettingsComponent,
    ExitComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PagesModule { }
