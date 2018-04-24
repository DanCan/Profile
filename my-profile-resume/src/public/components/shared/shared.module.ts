import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService, IAboutContact } from '../../services/services.module'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactsComponent,
  ],
  exports: [
    ContactsComponent,
  ],
  providers: [ContactsService],
})
export class SharedModule { }