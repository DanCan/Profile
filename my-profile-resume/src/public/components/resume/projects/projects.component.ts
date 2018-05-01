import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectData, IProject } from './projects.component.d';

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
