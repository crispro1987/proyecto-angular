import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navFix: boolean = false;

  constructor( private apiService : ApiService ) { }

  ngOnInit(): void {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  openMenu(){
    if(this.navFix){
      this.navFix = false;
    }else{
      this.navFix = true;
    }

    this.apiService.cart.emit({
      data: this.navFix
    })
  }

}
