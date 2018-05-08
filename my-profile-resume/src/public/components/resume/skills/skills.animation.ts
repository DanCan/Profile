import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const animateAnimation = 
  trigger('animateAnimation', [
    state('inactive', style({
      backgroundColor: 'initial',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ]);