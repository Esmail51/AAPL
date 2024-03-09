import { Component, HostListener , OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  isToggleButtonClicked: boolean = false;
  ngOnInit() {
  }

  scrollTo(elementId: string): void {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.enableScroll();
    }
  }
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isToggleButtonClicked = true;

    if (this.isMenuOpen) {
      this.disableScroll();
    } else {
      this.enableScroll();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isToggleButtonClicked = false;
    this.enableScroll();
  }
  private disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableScroll() {
    document.body.style.overflow = '';
  }


}
