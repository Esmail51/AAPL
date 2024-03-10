import { Component, ElementRef ,ViewChild, OnInit } from '@angular/core';
// import { IntersectionObserver } from '@angular/cdk/observers'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  @ViewChild('vedioRef') videoRef!: ElementRef<HTMLVideoElement>
  isToggleButtonClicked: boolean = false;
  private observer : IntersectionObserver | null = null;
  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.videoRef.nativeElement.src = '../../../assets/videos/Banner-480p - Made with Clipchamp.mp4'
        this.observer?.unobserve(this.videoRef.nativeElement);
      }
    })
  }

  ngAfterViewInit(){
    this.observer?.observe(this.videoRef.nativeElement)
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
