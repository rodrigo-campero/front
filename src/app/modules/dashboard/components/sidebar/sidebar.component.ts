import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    {
      title: 'Calendário',
      link: ['calendar'],
      icon: 'calendar'
    },
    {
      title: 'Relatórios',
      expanded: false,
      icon: 'file-text-outline',
      children: [
        {
          title: 'Bot 1',
          link: []
        },
        {
          title: 'Bot 2',
          link: []
        },
        {
          title: 'Indicadores',
          link: [],
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
