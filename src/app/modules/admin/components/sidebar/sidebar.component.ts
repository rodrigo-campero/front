import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    {
      title: 'Bots',
      link: ['bots'],
      icon: 'monitor-outline'
    },
    {
      title: 'Processos',
      link: ['process'],
      icon: 'archive-outline'
    },
    {
      title: 'Parametros',
      link: ['parameters'],
      icon: 'options-outline'
    },
    {
      title: 'Email',
      icon: 'email-outline'
    },
    {
      title: 'Telegram',
      icon: 'paper-plane-outline'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
