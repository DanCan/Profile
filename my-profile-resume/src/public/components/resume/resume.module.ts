import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
/* components */
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './projects/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

/* shared */
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  declarations: [
    AboutComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  exports: [
    AboutComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    ServicesModule
  ],
  // providers: [
  //   ContactsService
  // ]
})
export class PortfolioModule { }