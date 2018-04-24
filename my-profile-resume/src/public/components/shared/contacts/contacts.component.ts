import { Component, OnInit } from '@angular/core';
import { ContactsService, IAboutContact } from '../../../services/services.module'

@Component({
  selector: 'resume-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  preserveWhitespaces: false
})
export class ContactsComponent implements OnInit {

	contacts: Array<IAboutContact> = [];

	constructor(private contactsService: ContactsService) { }

	ngOnInit() {
		this.contacts = this.contactsService.contacts;
	}

}
