import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private apiService : ApiService ) { }

  ngOnInit(): void {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  openMenu(){
    this.apiService.cart.emit({
      data: true
    })
  }

}
