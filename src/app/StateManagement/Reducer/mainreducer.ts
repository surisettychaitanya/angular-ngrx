
import { INCREMENT, EVENT_FROM_EFFECT } from '../actions/actioncreator';
import { State, initialstate } from '../State/mainState';
import { ActionReducer, Action } from '@ngrx/store';


 //export const mainStoreReducer: ActionReducer<State> =
//  (state: State , action: Action) => {
//    console.log('Action came in! ' + action.type);
//    switch (action.type) {
//      case INCREMENT: {
//        console.log('Increment action being handled!');
//        return {
//          counter: state.counter + 1
//        }
//      }
//      case EVENT_FROM_EFFECT: {
//        console.log('we cheesin in the reducer over here!');
//        return {
//          counter: 4
//        }
//      }
//      default: {
//        return state;
//      }
//    }
//  };

export function mainStoreReducer(state: State = initialstate, action: Action): State {
  console.log(action.type);
  switch (action.type) {
    case INCREMENT:
    {

      return Object.assign({}, state, { counter: state.counter + 1 });
    }
    case EVENT_FROM_EFFECT:
    {

      return Object.assign({}, state, { counter: 4 });
    }
    default:
      {
        return state;
      }

  }
}
