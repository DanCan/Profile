import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
/* components */
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './projects/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

/* services */
import { ContactsService } from '../../services/services.module';
/* shared */
import { SharedModule } from '../shared/shared.module';

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
    HttpClientModule,
    SharedModule
  ]
})
export class PortfolioModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PortfolioModule,
      providers: [ ContactsService ]
    }
  }
}