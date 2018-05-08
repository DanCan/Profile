import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectData, IProject } from './projects.component.d';
import { LinkDropDown } from '../skills/skills.component.d';

@Component({
  selector: 'project-component',
  template: `
    <div class="row project-row" *ngFor="let _project of projects; let _i = index">
      <div class="project-vertical col-sm-4" >
        <h3 [innerHTML]="_project.title"><div class="date-text" [innerHTML]="_project.dates"></div></h3>
        <div class="btn-group-vertical project-btn-group" data-toggle="buttons">
          <input *ngIf="_project.host" type="button" class="btn btn-outline-primary stack" (click)="openWindow(_project.host)" value="Code. Downloads." />
          <input *ngIf="_project.github" type="button" class="btn btn-outline-primary stack" (click)="openWindow(_project.github)" value="Github Repository."/>
          <input *ngIf="_project.view" type="button" class="btn btn-outline-success stack" (click)="openWindow(_project.view)" value="View Now."/>
        </div>
      </div>
      <div class="card-text description col-sm-8">
        <p>
          {{_project.description}}
        </p>
        <ul *ngIf="_project.todo">
          <li *ngFor="let _item of _project.todo" [innerHTML]="_item"></li>
        </ul>
      </div>
    <div class="col-sm-2">
      <div class="project-skills">
        <div *ngFor="let _skill of _project.skills">
          <h6 id="{{_skill.title.replace(' ', '-')}}-project-{{_skill.index}}" class="btn-codepen animate btn-blue btn-border-rev" [innerHTML]="_skill.title"></h6>
        </div>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="images">
        <resume-carousel [id]="_project.title" [images]="_project.images" [backgroundColor]="carouselBackground"></resume-carousel>
      </div>
      <div *ngIf="_i !== projects.length -1" class="center-content">
        <hr class="gap">
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./projects.component.css'],
})
// badge badge-pill badge-info
export class ProjectComponent {

  @Input() projects;

  @Input('carousel-background') carouselBackground = 'transparent';

  openWindow(link: string) {
    window.open(link);
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

  constructor(private http: HttpClient) { }

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

    // @HostListener("window:scroll", [])
    // onWindowScroll() {
    //   console.log(this._parentHeight, this.headerHeight);
    //   let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //   const padding = 30;
    //   const headerPos = this._parentHeight + this.headerHeight - padding;
    //   if (number > headerPos) {
    //     this.showHeader = true;
    //   } else if (this.showHeader && number < headerPos) {
    //     this.showHeader = false;
    //   }
    // }

  }

}
