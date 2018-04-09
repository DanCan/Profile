import { Component } from '@angular/core';

@Component({
  selector: 'resume-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = 'Daniel Cannova';
  occupation: string = 'Engineer';
}
