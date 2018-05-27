
import { Component, OnInit,OnChanges,Input } from '@angular/core';
import {PetTag } from '../core/pet-tag.model';
@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.css']
})
export class TagPreviewComponent implements OnInit {
  @Input() petTag: PetTag;
  imagesrc = '';
  tagCliptext: string;
  gemsText:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.imagesrc = `/assets/images/${this.petTag.shape}.svg`;
    this.tagCliptext = this.boolToText(this.petTag.clip);
    this.gemsText = this.boolToText(this.petTag.gems);
  }
  private boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }
}
