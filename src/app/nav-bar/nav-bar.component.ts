import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
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
}
