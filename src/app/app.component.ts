import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'B3Test.Web';
  sidebarOpen = false;
  sidebar = [
    {
      title: 'Home',
      path: '/',
      icon: 'home'
    },
    {
      title: 'Tarefas',
      path: '/tarefas',
      icon: 'assignment'
    }
  ]

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
    this.closeSidebar();
  }
}