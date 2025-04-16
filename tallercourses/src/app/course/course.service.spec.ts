/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';
import { Course } from './course';

describe('BookListComponent', () => {
 let component: CourseComponent;
 let fixture: ComponentFixture<CourseComponent>;
 let debug: DebugElement;

 beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CourseComponent ],
     providers: [ CourseService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(CourseComponent);
   component = fixture.componentInstance;
   component.courses = [
     new Course(faker.lorem.sentence(), faker.person.fullName(), faker.number.int())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.courses[0].name)
 });


});