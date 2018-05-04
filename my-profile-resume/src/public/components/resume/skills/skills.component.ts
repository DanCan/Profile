import { Component, Input, HostListener, ViewEncapsulation } from '@angular/core';
import { ContactsService } from '../../../services/services.module';
import { animateAnimation } from './skills.animation';

@Component({
  selector: 'navigate-skill',
  styleUrls: ['./skills.component.css'],
  animations: [animateAnimation],
  encapsulation: ViewEncapsulation.None,
  template: `

        <ul class="navbar-nav mr-auto">
          <ng-template [ngIf]="multiple" [ngIfElse]="singleLink" >
            <span class="nav-link dropdown-toggle" [class.fake-link]="!show" role="button" data-toggle="dropdown" (click)="toggleShown()" aria-haspopup="true" aria-expanded="false'"	[innerHTML]="text"> </span>
            <div *ngIf="multiple" class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </ng-template>
          <ng-template #singleLink>
            <a href="#{{text}}-project" class="fake-link nav-link" pageScroll role="button" [innerHTML]="text" [pageScrollOffset]="50" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>
          </ng-template>
        </ul>
    <!--<ul class="nav nav-pills">-->
    <!--<li class="skill nav-item" [class.dropdown]="multiple" [class.show]="show" (click)="toggleState()">-->
      <!--<ng-template [ngIf]="multiple" [ngIfElse]="singleLink" >-->
        <!--<span class="nav-link dropdown-toggle" [class.fake-link]="!show" role="button" data-toggle="dropdown" (click)="showDropDown()" aria-haspopup="true" aria-expanded="show ? 'true' : false'"	 [innerHTML]="text"> </span>-->
        <!--<div *ngIf="multiple" class="dropdown-menu" [class.show]="show" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">-->
          <!--<a class="dropdown-item" href="#">Action</a>-->
          <!--<a class="dropdown-item" href="#">Another action</a>-->
          <!--<a class="dropdown-item" href="#">Something else here</a>-->
          <!--<div class="dropdown-divider"></div>-->
          <!--<a class="dropdown-item" href="#">Separated link</a>-->
        <!--</div>-->
      <!--</ng-template>-->
      <!--<ng-template #singleLink>-->
        <!--<a href="#{{text}}-project" class="fake-link nav-link" pageScroll role="button" [innerHTML]="text" [pageScrollOffset]="50" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>-->
      <!--</ng-template>-->
    <!--</li></ul>-->
  `
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

  toggleShown() {
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
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None

})
export class SkillsComponent {

	showHeader = false;

	get skills() {
		return this.contactsService.skills2 && this.contactsService.skills2['length'] !== 0 ? this.contactsService.skills2[0] : [];
	}

  @HostListener("window:scroll", [])
  onWindowScroll() {
	  console.log('here');
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 504) {
      this.showHeader = true;
    } else if (this.showHeader && number < 504) {
      this.showHeader = false;
    }
  }

  constructor(private contactsService: ContactsService) { }

}
