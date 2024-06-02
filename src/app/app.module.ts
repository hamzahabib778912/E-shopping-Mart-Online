import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { CourseComponent } from './course/course.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    CourseComponent,
    SummaryPipe,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
