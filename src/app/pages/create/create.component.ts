/// <reference path="../../core/pet-tag.actions.ts" />
import { Component, OnInit, OnDestroy } from '@angular/core';
import Pettagactions = require("../../core/pet-tag.actions");

import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';

import { PetTag, initialTag} from './../../core/pet-tag.model';
import { Store } from '@ngrx/store'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit,OnDestroy {

  tagState$: Observable<PetTag>
  private tagStateSubscription: Subscription;
  pettag: PetTag;
  done= false;
  constructor(private store: Store<any>) { // if PetTag is of any then only reducer call will happen and proper reducer will execute
    //store.dispatch({ type: Pettagactions.RESET, payload: initialTag });
    this.tagState$ = store.select(s=>s.pettagreducer);
  }

  ngOnInit() {

    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.pettag = state;
      //this.pettag.shape = "bone";
      this.done = !(this.pettag.shape && this.pettag.text);
    });
  }

  ngOnDestroy() { this.tagStateSubscription.unsubscribe(); }

  selectShapeHandler(state: String) {
    this.store.dispatch({
      type: Pettagactions.SELECT_SHAPE,
      payload:state
    });

  }
  selectFontHandler(fontType: string) {
    this.store.dispatch({
      type: Pettagactions.SELECT_FONT,
      payload: fontType
    });
  }
  addTextHandler(text: string) {
    this.store.dispatch({
      type: Pettagactions.ADD_TEXT,
      payload: text
    });
  }
  toggleClipHandler() {
    this.store.dispatch({
      type: Pettagactions.TOGGLE_CLIP
    });
  }
  toggleGemsHandler() {
    this.store.dispatch({
      type: Pettagactions.TOGGLE_GEMS
    });
  }
  submit() {
    this.store.dispatch({
      type: Pettagactions.COMPLETE,
      payload: true
    });
  }
}
