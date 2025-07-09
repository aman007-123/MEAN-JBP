import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jabalpuriya_2.0';
  scrollTopVisible: boolean = false;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  //Scroll top button
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleScrollTop();
  }

  toggleScrollTop(): void {
    this.scrollTopVisible = window.scrollY > 100;
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  ngOnInit() {
    AOS.init();
    const mobileNavToggleBtn =
      this.elRef.nativeElement.querySelector('.mobile-nav-toggle');
    this.renderer.listen(mobileNavToggleBtn, 'click', () =>
      this.mobileNavToggle()
    );

    this.toggleScrollTop();
  }

  // toggle nav bar for small screen devices
  mobileNavToggle(): void {
    const body = this.elRef.nativeElement.ownerDocument.body;
    const mobileNavToggleBtn =
      this.elRef.nativeElement.querySelector('.mobile-nav-toggle');

    // Toggle 'mobile-nav-active' class on body
    if (body.classList.contains('mobile-nav-active')) {
      this.renderer.removeClass(body, 'mobile-nav-active');
    } else {
      this.renderer.addClass(body, 'mobile-nav-active');
    }

    // Toggle 'bi-list' and 'bi-x' classes on the button
    if (mobileNavToggleBtn.classList.contains('bi-list')) {
      this.renderer.removeClass(mobileNavToggleBtn, 'bi-list');
      this.renderer.addClass(mobileNavToggleBtn, 'bi-x');
    } else {
      this.renderer.removeClass(mobileNavToggleBtn, 'bi-x');
      this.renderer.addClass(mobileNavToggleBtn, 'bi-list');
    }
  }
}
