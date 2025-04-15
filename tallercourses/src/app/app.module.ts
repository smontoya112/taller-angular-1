import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseModule } from './course/course.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from "./course/course.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    CourseComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
