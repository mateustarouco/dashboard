import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeLogo(id : string) {
    document.querySelectorAll('.pseudo-icon').forEach(item=>{
      item.classList.remove('logo-active')
    })
    // @ts-ignore
    document.getElementById(id).classList.toggle('logo-active')
  }
}
