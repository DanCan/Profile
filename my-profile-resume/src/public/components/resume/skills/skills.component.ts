import { Component, Input } from '@angular/core';
import { ContactsService } from '../../../services/services.module';
import { animateAnimation } from './skills.animation';

@Component({
  selector: 'navigate-skill',
  styleUrls: ['./skills.component.css'],
  animations: [animateAnimation],
  template: `<ul class="nav nav-pills"  >
  <li class="skill nav-item " [@animateAnimation]="state" [class.dropdown]="multiple" [class.show]="show" (click)="toggleState()">
  	<span class="fake-link nav-link" [class.dropdown-toggle]="multiple" role="button" [attr.data-toggle]="multiple ? 'dropdown' : ''" (click)="showDropDown()" aria-haspopup="true" aria-expanded="show ? 'true' : false'"	 [innerHTML]="text"> </span>
		<div *ngIf="multiple" class="dropdown-menu" [class.show]="show" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li></ul>`
})
// [@animateAnimation]="state" 
// href="#{{text}}-project"
//  pageScroll
// [pageScrollOffset]="0" [pageScrollDuration]="2000" 
// [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"
export class SkillNavComponent {

  @Input() text: string;

  state = 'inactive';

  doubles = ['HTML']; 

  show = false;

  get multiple() {
  	let value = this.doubles.filter(v => v === this.text);
  	return value.length > 0;
  }

  showDropDown() {
  	if(this.multiple) {
  		this.show = !this.show;
  	}
  }

  /** source: https://www.npmjs.com/package/ng2-page-scroll **/
	myEasing: any = {
      ease: (t: number, b: number, c: number, d: number): number => {
          // easeInOutExpo easing
          if (t === 0) return b;
          if (t === d) return b + c;
          if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
  };

  doSmth(reachedTarget: boolean): void {
      if (reachedTarget) {
          console.log('Yeah, we reached our destination');
      } else {
          console.log('Ohoh, something interrupted us');
      }
  }
  /** end source **/

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}

@Component({
  selector: 'resume-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  preserveWhitespaces: false
})
export class SkillsComponent {

	showHeader = false;

	get skills() {
		return this.contactsService.skills2 && this.contactsService.skills2['length'] !== 0 ? this.contactsService.skills2[0] : [];
	}

  constructor(private contactsService: ContactsService) { }

}
