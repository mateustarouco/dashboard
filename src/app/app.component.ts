import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashboardAdministrator';

  constructor(public matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'chat',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/chat.svg')
    );
    matIconRegistry.addSvgIcon(
      'exit',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/exit.svg')
    );
    matIconRegistry.addSvgIcon(
      'help',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg')
    );
    matIconRegistry.addSvgIcon(
      'home',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg')
    );
    matIconRegistry.addSvgIcon(
      'lock',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/lock.svg')
    );
    matIconRegistry.addSvgIcon(
      'settings',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg')
    );
    matIconRegistry.addSvgIcon(
      'users',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/users.svg')
    );
    matIconRegistry.addSvgIcon(
      'dashboard',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg')
    );
    matIconRegistry.addSvgIcon(
      'whatsapp',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg')
    );
    matIconRegistry.addSvgIcon(
      'facebook',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    matIconRegistry.addSvgIcon(
      'instagram',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
  }
}
