
import { Component, OnInit,OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import petTagActions = require("../../core/pet-tag.actions");
import { PetTag } from '../../core/pet-tag.model';
@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  constructor(private store: Store<any>) {
    this.tagState$ = store.select(s => s.pettagreducer);
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

  ngOnDestroy(): void {
    this.tagStateSubscription.unsubscribe();
  }
  newTag() {
    this.store.dispatch({
      type: petTagActions.RESET

    });
  }
}
