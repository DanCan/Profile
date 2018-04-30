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

  slide: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  
    this.http.get("assets/projects.component.json")
      .subscribe( res  => {
        this.data = res as IProjectData;
        console.log(this.data);
        for (let project of this.data.course) {
          this.courseProjects.push(project);
        }
        for (let project of this.data.side) {
          this.sideProjects.push(project);
        }
    });
  
  }
}
