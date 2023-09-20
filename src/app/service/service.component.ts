import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  router = inject(Router);
  navigateHome(){
    this.router.navigateByUrl('/home');
  }
  navigateManga(){
    this.router.navigateByUrl('/manga');
  }
  navigateAnime(){
    this.router.navigateByUrl('/anime');
  }
  navigateIntroduct(){
    this.router.navigateByUrl('/introduct');
  }
  navigateProduct(){
    this.router.navigateByUrl('/product');
  }

}
