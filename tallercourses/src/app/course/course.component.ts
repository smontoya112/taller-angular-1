import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './datacourses';
import { CommonModule } from '@angular/common';
import { CourseService } from './course.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  imports: [CommonModule,RouterTestingModule, HttpClientModule]

})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  courses: Array<Course> = [];

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  ngOnInit() {
    this.getCourses();
  }
}