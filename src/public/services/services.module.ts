import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
/* components */
import { ContactsService } from './contactsService/contacts.service';
import { IAboutContact } from './contactsService/about.component';
/* exports */
export { ContactsService, IAboutContact }

@NgModule({})
export class ServicesModule { 

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ServicesModule,
			providers: [ ContactsService ]
		}
	}
}


// TODO: Create a Service that loads in the Projects and totals the doubles.