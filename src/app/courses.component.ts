import { Component } from "@angular/core";


@Component({
  selector: "app-courses",
  template: `<h2>List of Courses</h2>
                <ul>
                <li *ngFor="let course of cources">
                {{course}}
                </li>
                </ul>`
})
export class CoursesComponent {
title = "List of cources";
cources = ["English", "Math", "Science"]

}
