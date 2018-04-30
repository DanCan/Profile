import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-carousel',
  templateUrl: './carousel.component.html',
  // styleUrls: ['./carousel.component.css'],
  preserveWhitespaces: false
})
export class CarouselComponent {
	@Input() images: Array<string>;
  slide: number = 0;

  constructor() { }

}