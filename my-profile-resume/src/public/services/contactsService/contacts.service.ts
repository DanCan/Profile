import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAboutData, IAboutContact } from './about.component.d';

@Injectable()
export class ContactsService {

  private data: IAboutData;
  contacts: Array<IAboutContact> = [];
  welcomeMessage: string = "";
  welcomeMessageCallout: string = "";
  skills: Array<Array<string>>;

  constructor(private http: HttpClient) { 
    this.http.get("assets/about.component.json")
      .subscribe( res  => {
        this.data = res as IAboutData;
        for (let contactData of this.data.contacts) {
          this.contacts.push(contactData);
        }
        this.welcomeMessage = this.data.welcomeMessage;
        this.welcomeMessageCallout = this.data.welcomeMessageCallout;
        this.skills = this.data.skills;
    });
  }

}