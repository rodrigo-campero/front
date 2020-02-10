import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    {
      title: 'Home',
      link: ['/dashboard'],
      icon: 'home'
    },
    {
      title: 'Calendar',
      link: ['calendar'],
      icon: 'calendar'
    },
    {
      title: 'Reports',
      expanded: false,
      children: [
        {
          title: 'Bots 1',
          link: []
        },
        {
          title: 'Bots 1',
          url: '#',
        },
        {
          title: 'Logout',
          link: [],
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
