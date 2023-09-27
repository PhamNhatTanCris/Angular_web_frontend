import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isScrolled!: boolean;
  styleElement!: string;
  ngOnInit(): void {
    this.isScrolled = false;
  }
  stringSearch ='';

  contentSearch(){
    console.log("nội dung tìm kiếm: " + this.stringSearch);
    if(this.stringSearch){
      this.stringSearch = '';
    }
    else{
      alert("Chưa nhập nội dung tìm kiếm!")
    }
  }

  @HostListener('window: scroll', [])
  onScroll(){
    this.isScrolled = document.documentElement.scrollTop> 25;
    if(this.isScrolled){
      this.styleElement = 'opacity: 0.9;';
    }
    else{
      this.styleElement = '';
    }
  }


}
