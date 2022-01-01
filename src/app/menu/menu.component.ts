import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.menus, event.previousIndex, event.currentIndex);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  setEfect(id: any) {
    document.querySelectorAll('.component').forEach(item => {
      item.classList.remove('active')
    })
    // @ts-ignore
    document.getElementById(id).classList.toggle('active')
  }

  resetEfect() {
    document.querySelectorAll('.component').forEach(item => {
      item.classList.remove('active')
    })
  }

  toggle() {
    // @ts-ignore
    document.getElementById('menu').classList.toggle('open-menu')
    document.querySelectorAll('.component').forEach(item => {
      item.classList.remove('active')
    })
  }

  configure() {
    // @ts-ignore
    document.getElementById('menu').classList.toggle('open-menu-conf')
    // @ts-ignore
    document.getElementById('configuration').classList.toggle('configuration-open')

  }

  menus = [
    {
      name: 'Home',
      icon: 'home',
      link: '',
      id: 1
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: 'dashboard',
      id: 2
    },
    {
      name: 'Usuários',
      icon: 'users',
      link: 'usuarios',
      id: 3
    },
    {
      name: 'Mensagens',
      icon: 'chat',
      link: 'mensagens',
      id: 4
    },
    {
      name: 'Ajuda',
      icon: 'help',
      link: 'ajuda',
      id: 5
    },
    {
      name: 'Configurações',
      icon: 'settings',
      link: 'configuracoes',
      id: 6
    },
    {
      name: 'Sair',
      icon: 'exit',
      link: 'sair',
      id: 7
    }
  ]
}
