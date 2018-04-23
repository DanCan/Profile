import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAboutData, IAboutContact } from './about.component.d';
// TODO: Start bones of nav. Pull in Education and Google and footer.
//TODO: Do navigation of skills pc.
@Component({
  selector: 'resume-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  preserveWhitespaces: false
})
export class AboutComponent implements OnInit {
  private data: IAboutData;
  contacts: Array<IAboutContact> = [];
  welcomeMessage: string = "";
  welcomeMessageCallout: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("assets/about.component.json")
      .subscribe( res  => {
        this.data = res as IAboutData;
        for (let contactData of this.data.contacts) {
          this.contacts.push(contactData);
        }
        this.welcomeMessage = this.data.welcomeMessage;
        this.welcomeMessageCallout = this.data.welcomeMessageCallout;
    });
  }
}
