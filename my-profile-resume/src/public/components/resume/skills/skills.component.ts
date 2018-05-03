import { Component, Input } from '@angular/core';
import { ContactsService } from '../../../services/services.module';
import { animateAnimation } from './skills.animation';

@Component({
  selector: 'navigate-skill',
  styleUrls: ['./skills.component.css'],
  animations: [animateAnimation],
  template: `<div class="skill" [@animateAnimation]="state" (click)="toggleState()" [innerHTML]="text">
  </div>`
})
export class SkillNavComponent {

  @Input() text: string;

  state = 'inactive';

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}

@Component({
  selector: 'resume-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  preserveWhitespaces: false
})
export class SkillsComponent {

	get skills() {
		return this.contactsService.skills2 && this.contactsService.skills2['length'] !== 0 ? this.contactsService.skills2[0] : [];
	}

  constructor(private contactsService: ContactsService) { }

}
