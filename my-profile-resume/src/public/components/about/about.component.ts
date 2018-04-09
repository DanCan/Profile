import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAboutData } from './about.component.d';
// TODO: pull over rest of image, msg and title. Start bones of nav. Pull in Projects, Education and Google.
//TODO: use bootswatch theme. Do navigation of skills pc.
@Component({
  selector: 'resume-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: Array<IAboutData> = [];
  weclomeMessage: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("assets/about.component.json")
      .subscribe( res  => {
        for (let aboutData of res['metadata']) {
          this.data.push(aboutData);
        }
    });
  }
}
