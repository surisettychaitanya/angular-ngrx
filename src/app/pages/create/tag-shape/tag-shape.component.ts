import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.css']
})
export class TagShapeComponent implements OnInit {
  tagshape: string;
  @Output() selectShapeEvent  = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectShape(shape: string) {
    this.selectShapeEvent .emit(shape);
  }
}
