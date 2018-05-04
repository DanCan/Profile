import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectData, IProject } from './projects.component.d';

@Component({
  selector: 'project-component',
  template: `
    <div class="row project-row" *ngFor="let _project of projects; let _i = index">
    <div class="project-vertical col-sm-4">
      <h3 [innerHTML]="_project.title"><div class="date-text" [innerHTML]="_project.dates"></div></h3>
      <div class="btn-group-vertical project-btn-group" data-toggle="buttons">
        <input *ngIf="_project.host" type="button" class="btn btn-primary stack" (click)="openWindow(_project.host)" value="Code. Downloads." />
        <input *ngIf="_project.github" type="button" class="btn btn-primary stack" (click)="openWindow(_project.github)" value="Github Repository."/>
        <input *ngIf="_project.view" type="button" class="btn btn-success stack" (click)="openWindow(_project.view)" value="View Now."/>
      </div>
      <div class="project-skills">
        <div *ngFor="let _skill of _project.skills">
          <span id="{{_skill}}-project" class="badge badge-pill badge-info" [innerHTML]="_skill"></span>
        </div>
      </div>
    </div>
    <div class="card-text description col-sm-4">
      <p>
        {{_project.description}}
      </p>
      <ul *ngIf="_project.todo">
        <li *ngFor="let _item of _project.todo" [innerHTML]="_item"></li>
      </ul>
    </div>
    <div class="images col-sm-4">
      <resume-carousel [id]="_project.title" [images]="_project.images" [backgroundColor]="carouselBackground"></resume-carousel>
    </div>
    <div *ngIf="_i !== projects.length -1" class="center-content">
      <hr class="gap">
    </div>
  </div>`,
  styleUrls: ['./projects.component.css'],
})
export class ProjectComponent {

  @Input() projects;

  @Input('carousel-background') carouselBackground = 'transparent';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get("assets/projects.component.json")
      .subscribe( res  => {
        this.data = res as IProjectData;
        for (let project of this.data.course) {
          this.courseProjects.push(project);
        }
        for (let project of this.data.side) {
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

  openWindow(link: string) {
    console.log(link);
    window.open(link);
  }

}
