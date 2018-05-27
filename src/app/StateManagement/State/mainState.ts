export interface State {
  counter: number;
   shape: string;
   font: string;
   text: string;
   clip: boolean;
   gems: boolean;
   complete: boolean;
}
export const initialstate: State = {
  counter: 10,
  shape: '',
  font: 'sans-serif',
  text: '',
  clip: false,
  gems: false,
  complete: false
};
