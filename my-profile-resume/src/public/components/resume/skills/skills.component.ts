import { Component } from '@angular/core';
import { ContactsService } from '../../../services/services.module';

@Component({
  selector: 'resume-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  preserveWhitespaces: false
})
export class SkillsComponent {

  constructor(private contactsService: ContactsService) { }

}
