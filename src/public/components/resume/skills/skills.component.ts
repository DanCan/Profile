import { OnInit, Component, Input, Output, ViewChild, HostListener, ViewEncapsulation, ElementRef, EventEmitter} from '@angular/core';
import { ContactsService } from '../../../services/services.module';
import { animateAnimation } from './skills.animation';
import { LinkDropDown } from './skills.component.d';

/*
`
        <ul class="navbar-nav mr-auto">

          <ng-template [ngIf]="multiple" [ngIfElse]="singleLink" >
            <span class="nav-link dropdown-toggle" [@animateAnimation]="state" [class.fake-link]="!show" role="button" data-toggle="dropdown" (click)="toggleShown()" aria-haspopup="true" aria-expanded="false'"	[innerHTML]="text"> </span>
            <div *ngIf="multiple" class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
              <a *ngFor="let _skill of doubles[text]" class="dropdown-item" href="#{{text.replace(' ', '-')}}-project-{{_skill}}" [innerHTML]="_skill==0 ? text+' Profile' : text+' Place To Visit'"
              		[@animateAnimation]="state" pageScroll role="button" [pageScrollOffset]="500" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>
            </div>
          </ng-template>
          <ng-template #singleLink>
            <a href="#{{text.replace(' ', '-')}}-project-0" class="fake-link nav-link" [@animateAnimation]="state" pageScroll role="button" [innerHTML]="text" [pageScrollOffset]="500" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>
          </ng-template>
        </ul>
  `
*/

@Component({
  selector: 'navigate-skill',
  styleUrls: ['./skills.component.css'],
  animations: [animateAnimation],
  encapsulation: ViewEncapsulation.None,
  template: `
  	<ul class="navbar-nav mr-auto">
  		<ng-container *ngFor="let project of projectTitles">
				<ng-template [ngIf]="project.menu" [ngIfElse]="singleLink">
					<div class="btn-group" role="group"><span class="nav-link dropdown-toggle" [@animateAnimation]="state" [class.fake-link]="!show" role="button" data-toggle="dropdown" (click)="toggleShown()" aria-haspopup="true" aria-expanded="false'"	[innerHTML]="project.title"> </span>
          <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
            <a *ngFor="let _skill of project.items" class="dropdown-item dropdown-link" href="#{{project.title}}:-{{replaceSpaces(_skill)}}" [innerHTML]="_skill"
            		(click)="emitCollapseEvent()" [@animateAnimation]="state" pageScroll role="button" [pageScrollOffset]="offset" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>
        	</div>    </div>


				</ng-template>
        <ng-template #singleLink>
          <a href="#{{replaceSpaces(project.title)}}" (click)="emitCollapseEvent()" class="fake-link nav-link" [@animateAnimation]="state" pageScroll role="button" [innerHTML]="project.title" [pageScrollOffset]="offset" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>
        </ng-template>
  		</ng-container>
  	</ul>
  `
})
export class SkillNavComponent {

  @Input() text: string;

  @Input() offset: number;

  @Output() navigationClick: EventEmitter<boolean> = new EventEmitter();

  state = 'inactive';

  projectTitles = [
	  { title:'Illuminare: Spirit', menu: false },
	  { title:'Super Astro Breakers', menu: false },
	  { title: "Udacity", menu: true, items: ['Profile', 'Place I want to visit']}
  ];

  private _doubles: Array<LinkDropDown> = [ { title: 'HTML', total: 2 }, { title: 'CSS', total: 2 }, { title: 'JavaScript', total: 2 } ];

  doubles: { [skill:string]: Array<number> } = {};

  show = false;

  scrollOffset = 0;

  replaceSpaces(str) {
  	return str.replace(/\s/g, '-');
  }

  get multiple() {
  	let value = this._doubles.filter(v => v.title === this.text);
  	return value.length > 0;
  }

  constructor() {
  	for( let ldd of this._doubles) {
			this.doubles[ldd.title] = Array(ldd.total).fill(ldd.total).map((x,i)=>i);
  	}
  }

  toggleShown() {
  	if(this.multiple) {
  		this.show = !this.show;
  	}
  }

  emitCollapseEvent() {
    this.navigationClick.emit(true);
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
export class SkillsComponent implements OnInit {

  @ViewChild('skillNav') skillNav;
  @ViewChild('skillNavFloat') skillNavFloat;

	@Input('offsetHeight')
	set parentHeight(value) {
		this._parentHeight = value;
	}
	_parentHeight = 0;

	showHeader = false;

	headerHeight = 0;

  @Output()
  skillHeight: EventEmitter<number> = new EventEmitter<number>();

	get skills() {
		return this.contactsService.skills2 && this.contactsService.skills2['length'] !== 0 ? this.contactsService.skills2[0] : [];
	}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const headerPos = this._parentHeight - this.headerHeight;
    if (number > headerPos) {
      this.showHeader = true;
    } else if (this.showHeader && number < headerPos) {
      this.showHeader = false;
    }
  }

  constructor(private contactsService: ContactsService, private elmRef: ElementRef) { }

  ngOnInit() {
    this.headerHeight = this.elmRef.nativeElement.getElementsByClassName('height-fix')[0].offsetHeight;
    console.log('skils component', this.headerHeight);
    this.skillHeight.emit(this.headerHeight);
  }

  collapse() {
    // get check both buttons for click expanded state
    // click one or both
    if (!this.skillNav.nativeElement.classList.contains('collapsed') ) {
      this.skillNav.nativeElement.click();
    }
    if (this.skillNavFloat && !this.skillNavFloat.nativeElement.classList.contains('collapsed') ) {
      this.skillNavFloat.nativeElement.click();
    }
  }
}
