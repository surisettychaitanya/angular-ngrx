import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-text',
  templateUrl: './tag-text.component.html',
  styleUrls: ['./tag-text.component.css']
})
export class TagTextComponent implements OnInit {

  tagTextInput = '';
  fontType = 'sans-serif';
  @Output() addTextEvent = new EventEmitter();
  @Output() selectFontEvent  = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addText(text:string) {
    this.addTextEvent.emit(text);
  }
  selectFont(fontType: string) {
    this.selectFontEvent.emit(fontType);
  }
}
