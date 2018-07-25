import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerContentHeight = 0;
  skillsHeight = 0;

  @HostListener("window:scroll", [])
  onWindowScroll(){
    this.headerContentHeight = document.getElementsByClassName('height-fix')[0].scrollHeight || 0;
  }

  setSkillHeight(skillHeight){
    console.log("skillheight", skillHeight);
    this.skillsHeight = skillHeight;
  }
}
