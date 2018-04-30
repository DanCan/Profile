import { Component } from '@angular/core';
import { ContactsService } from '../../../services/services.module';

@Component({
  selector: 'resume-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  preserveWhitespaces: false
})
export class FooterComponent {

  constructor(private contactsService: ContactsService) { }

}
