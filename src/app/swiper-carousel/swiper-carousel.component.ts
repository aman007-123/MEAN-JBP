import { Component, OnInit, ElementRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-swiper-carousel',
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.scss'],
})
export class SwiperCarouselComponent implements OnInit {
  images = [
    'assets/img/pohe-jalebi.jpg',
    'assets/img/samosa_kachori.jpg',
    'assets/img/chaat.jpg',
    'assets/img/noodles_manchuarian.jpg',
  ];
  currentIndex = 0;
  paginationArray: number[] = [];

  constructor(private elRef: ElementRef) {}
  ngOnInit(): void {
    AOS.init();
    this.paginationArray = Array(Math.ceil(this.images.length / 2))
      .fill(0)
      .map((x, i) => i);
    console.log(this.paginationArray);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
