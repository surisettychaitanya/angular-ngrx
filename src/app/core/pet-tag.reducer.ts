import {Action} from '@ngrx/store'
import { PetTag, initialTag, Actionpayload} from './../core/pet-tag.model'
import Pettagactions = require("./pet-tag.actions");

export function pettagreducer(state: PetTag = initialTag, action: Actionpayload<any>) {
  switch (action.type) {
    case Pettagactions.SELECT_SHAPE:
      return Object.assign({}, state, { shape: action.payload });
    case Pettagactions.SELECT_FONT:
      return Object.assign({}, state, { font: action.payload });
    case Pettagactions.ADD_TEXT:
      return Object.assign({}, state, { text: action.payload });
    case Pettagactions.TOGGLE_CLIP:
      return Object.assign({}, state, { clip: !state.clip });
    case Pettagactions.TOGGLE_GEMS:
      return Object.assign({}, state, { gems: !state.gems });
    case Pettagactions.COMPLETE:
      return Object.assign({}, state, { complete: action.payload });
    case Pettagactions.RESET:
      return Object.assign({}, state, initialTag);
    default:
      return state;

  }

}
