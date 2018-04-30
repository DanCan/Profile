import { Component } from '@angular/core';
import { ContactsService } from '../../../services/services.module';

// todo media qurry at 740 with contacts container at 457.
// TODO: Start bones of nav. Pull in footer.
//TODO: Do navigation of skills pc.
@Component({
  selector: 'resume-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  preserveWhitespaces: false
})
export class AboutComponent {
	
	get welcomeMessage(): string {
		return this.contactsService.welcomeMessage
	}

	get welcomeMessageCallout(): string {
		return this.contactsService.welcomeMessageCallout
	}

  constructor(private contactsService: ContactsService) { }

}
