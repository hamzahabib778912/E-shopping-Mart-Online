import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() public isFavourite: boolean = false;
  @Output() change = new EventEmitter();
  post = {
    title : "Test Course",
    isFavorite : true,
  }
  constructor() {
   }

  ngOnInit(): void {
  }



  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite });
  }

}
