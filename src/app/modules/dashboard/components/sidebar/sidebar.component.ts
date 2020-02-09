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
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          link: [], // goes into angular `routerLink`,
          icon: 'home'
        },
        {
          title: 'Privacy Policy',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'Logout',
          link: [],
        },
      ],
    },
    {
      title: 'Shopping Bag',
      children: [
        {
          title: 'First Product',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Second Product',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'Third Product',
          link: [],
        },
      ],
    },
    {
      title: 'Orders',
      children: [
        {
          title: 'First Order',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Second Order',
          url: '#', // goes directly into `href` attribute
        },
        {
          title: 'Third Order',
          link: [],
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
