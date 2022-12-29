import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';
import { EntranceSectionComponent } from './entrance-section/entrance-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectThreeComponent } from './project-three/project-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeadMenuComponent,
    EntranceSectionComponent,
    AboutMeSectionComponent,
    MySkillsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
