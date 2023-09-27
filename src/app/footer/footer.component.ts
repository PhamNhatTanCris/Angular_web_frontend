import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isScrolled!: boolean;

  ngOnInit() {
    this.isScrolled = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = (document.documentElement.scrollTop || document.body.scrollTop) > 150;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
