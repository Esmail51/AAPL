import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  currentSlideIndex = 0;
  slides = [
    { id: 1, url: '../../../assets/img/banner1.png' },
    { id: 2, url: '../../../assets/img/banner2.jpg' },
    { id: 3, url: '../../../assets/img/banner4.png' },
  ];

  ngOnInit(): void {}

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

}
