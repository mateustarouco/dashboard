import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UsersComponent} from "./pages/users/users.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {HelpComponent} from "./pages/help/help.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {ExitComponent} from "./pages/exit/exit.component";


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'usuarios',
    component: UsersComponent,
  },
  {
    path: 'mensagens',
    component: ChatComponent,
  },
  {
    path: 'ajuda',
    component: HelpComponent,
  },
  {
    path: 'configuracoes',
    component: SettingsComponent,
  },
  {
    path: 'sair',
    component: ExitComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
