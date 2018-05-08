import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { PortfolioModule } from './components/resume/resume.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './components/shared/shared.module';

import { ContactsService } from './services/contactsService/contacts.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
	constructor() { }
}
