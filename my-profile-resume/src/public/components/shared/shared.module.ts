import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts/contacts.component';
import { IAboutContact } from '../../services/services.module'
import { ServicesModule } from '../../services/services.module';


@NgModule({
  imports: [
    CommonModule,
    ServicesModule
  ],
  declarations: [
    ContactsComponent
  ],
  exports: [ContactsComponent]
})
export class SharedModule { }