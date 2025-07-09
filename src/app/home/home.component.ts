import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isVideoPlaying = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    AOS.init();
  }

  playVideo(): void {
    const videoElement =
      this.elRef.nativeElement.querySelector('.background-video');
    if (videoElement) {
      this.renderer.setStyle(videoElement, 'display', 'block');
      videoElement.muted = true; // Ensure the video is muted
      videoElement.play();
      this.isVideoPlaying = true;
    }
  }
}
