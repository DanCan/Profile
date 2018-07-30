import { Component, ViewChild, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectData, IProject } from './projects.component.d';
import { LinkDropDown } from '../skills/skills.component.d';

@Component({
  selector: 'project-component',
  template: `
  <ng-container *ngFor="let _project of projects; let _i = index">
  <div class="project-container">
    <h3 class="project-title" id="{{replaceSpaces(_project.title)}}">{{_project.title}}<div class="date-text" [innerHTML]="_project.dates"></div></h3>   
    <div class="row project-skills">
      <div class="project-skill" *ngFor="let _skill of _project.skills">
        <h6 id="{{_skill.title.replace(' ', '-')}}-project-{{_skill.index}}" class="btn-codepen animate btn-blue btn-border-rev" [innerHTML]="_skill.title"></h6>
      </div>
    </div>
    <div class="row project-row" >
      <div class="project-vertical col-md-4" >
        <p>
          {{_project.description}}
        </p>
      </div>

      <div class="card-text project-vertical col-md-4">
        <ul *ngIf="_project.todo">
          <ng-container *ngFor="let _item of _project.todo">
            <li [innerHTML]="_item" [class.player]="_item.includes('layer')"></li>
          </ng-container>
        </ul>
        <!--<div class="btn-group-vertical project-btn-group" data-toggle="buttons">
          <input *ngIf="_project.host" type="button" class="btn btn-outline-primary " (click)="openWindow(_project.host)" value="Code & Downloads" />
          <input *ngIf="_project.github" type="button" class="btn btn-outline-primary " (click)="openWindow(_project.github)" value="Github Repository"/>
          <input *ngIf="_project.view" type="button" class="btn btn-outline-success " (click)="openWindow(_project.view)" value="View Now"/>
        </div>-->
      </div>

      <div class="images col-md-4">
        <resume-carousel [id]="_project.title" [images]="_project.images" [backgroundColor]="carouselBackground"></resume-carousel>
      </div>

      <div class="btn-group-vertical project-btn-group" data-toggle="buttons">
        <input *ngIf="_project.host" type="button" class="btn btn-outline-primary " (click)="openWindow(_project.host)" value="Code & Downloads" />
        <input *ngIf="_project.github" type="button" class="btn btn-outline-primary " (click)="openWindow(_project.github)" value="Github Repository"/>
        <input *ngIf="_project.view" type="button" class="btn btn-outline-success " (click)="openWindow(_project.view)" value="View Now"/>
      </div>
    </div>
  </div>

  <div *ngIf="_i !== projects.length -1" class="center-content">
    <hr class="gap">
  </div>
  </ng-container>`,
  styleUrls: ['./projects.component.css'],
})
// badge badge-pill badge-info
export class ProjectComponent {

  @Input() projects;

  @Input('carousel-background') carouselBackground = 'transparent';

  openWindow(link: string) {
    window.open(link);
  }

   replaceSpaces(str) {
    return str.replace(/\s/g, '-')
  }

}

@Component({
  selector: 'resume-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  preserveWhitespaces: true
})
export class ProjectsComponent implements OnInit {
  private data: IProjectData;

  courseProjects: Array<IProject> = [];
  sideProjects: Array<IProject> = [];

  projects = [];

  linkDropDownDictionary: { [skill:string]: number } = {};

  @ViewChild('sideProjectElm') sideProjectElm: ElementRef;
  @ViewChild('courseProjectElm') courseProjectElm: ElementRef;

  constructor(private http: HttpClient, private elmRef: ElementRef) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.http.get("assets/projects.component.json")
      .subscribe( res  => {
        this.data = res as IProjectData;
        for (let project of this.data.course) {
          let skills = [];
          for( let skill of project.skills) {
            let dictSkill: string = skill as string;
            if (!this.linkDropDownDictionary.hasOwnProperty(dictSkill)) {
              this.linkDropDownDictionary[dictSkill] = 0;
            } else {
              this.linkDropDownDictionary[dictSkill]++;
            }
            skills.push({title: skill, index: this.linkDropDownDictionary[dictSkill] });
          }

          project.skills = skills;
          this.courseProjects.push(project);

        }

        for (let project of this.data.side) {
          let skills = [];
          for( let skill of project.skills) {
            let dictSkill: string = skill as string;

            if (!this.linkDropDownDictionary[dictSkill]) {
              this.linkDropDownDictionary[dictSkill] = 0;
            } else {
              this.linkDropDownDictionary[dictSkill]++;
            }
            skills.push({title: dictSkill, index: this.linkDropDownDictionary[dictSkill] });
          }

          project.skills = skills;
          this.sideProjects.push(project);

        }
        

        this.projects = [{
          title: "Side Projects",
          data: this.sideProjects
        },
        {
          title: "Course Projects",
          data: this.courseProjects
        }];
        console.log(this.projects);

    });

  }

  @Input('offsetHeight')
	set parentHeight(value) {
		this._parentHeight = value;
	}
  _parentHeight = 0;
  
  @Input('navHeight')
	set navHeight(value) {
		this._navHeight = value - 2;
	}
  _navHeight = 0;
  
  sideProjectsHeight: number;
  sideProjectsFixed: boolean = false;
  courseProjectsHeight: number;
  courseProjectsFixed: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const headerPos = this._parentHeight;
    
    if (this.sideProjectsHeight === undefined) {
      this.sideProjectsHeight = this.elmRef.nativeElement.getElementsByClassName('side-projects')[0].offsetHeight;
    }

    if (this.courseProjectsHeight === undefined) {
      this.courseProjectsHeight = this.elmRef.nativeElement.getElementsByClassName('course-projects')[0].offsetHeight;
    }

    let compiledHeight1 = headerPos;
    let compiledHeight2 = headerPos + this.sideProjectsHeight + this.sideProjectElm.nativeElement.offsetHeight;
    if (number > compiledHeight1 && number < compiledHeight2) {
      this.sideProjectsFixed = true;
    }else {
      this.sideProjectsFixed = false;
    }

    compiledHeight1 = compiledHeight1 + this.sideProjectsHeight + this.courseProjectElm.nativeElement.offsetHeight;
    compiledHeight2 = compiledHeight2 + this.courseProjectsHeight;
   
    if (number > compiledHeight1 && number < compiledHeight2) {
      if (number > compiledHeight1) {
        this.courseProjectsFixed = true;
      }
    }else {
      this.courseProjectsFixed = false;
    }
    //console.log(number, compiledHeight1, this._parentHeight)
    //console.log(number, this.sideProjectsHeight, this.courseProjectsHeight);
 
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    this.sideProjectsHeight = undefined;
    this.courseProjectsHeight = undefined;
    this.onWindowScroll();
  }
}
