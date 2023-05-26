import { Component } from '@angular/core';

interface Path {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingApp';

  paths: Path[] = [
    {title: 'Home', path: 'home'},
    {title: 'Courses', path: 'courses'},
    {title: 'Contact', path: 'contact'},
    {title: 'About', path: 'about'}
  ]
}
