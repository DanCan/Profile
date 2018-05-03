import { Component } from '@angular/core';
import { ContactsService } from '../../../services/services.module';
import { animateAnimation } from './skills.animation';

@Component({
  selector: 'resume-skills',
  templateUrl: './skills.component.html',
  animations: [animateAnimation],
  styleUrls: ['./skills.component.css'],
  preserveWhitespaces: false
})
export class SkillsComponent {

	state: string = 'inactive';

	get skills() {
		return this.contactsService.skills2 && this.contactsService.skills2['length'] != 0 ? this.contactsService.skills2[0] : [];
	}

  constructor(private contactsService: ContactsService) { }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
