import { Component } from '@angular/core';
import { ContactsService } from '../../../services/services.module';

// TODO: Start bones of nav. Pull in footer.
//TODO: Do navigation of skills pc.
@Component({
  selector: 'resume-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  preserveWhitespaces: false
})
export class AboutComponent {



  constructor(private contactsService: ContactsService) { }

}
