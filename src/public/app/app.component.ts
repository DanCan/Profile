import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerContentHeight = 0;

  @HostListener("window:scroll", [])
  onWindowScroll(){
    this.headerContentHeight = document.getElementsByClassName('header-content')[0].scrollHeight || 0;
  }
}
