import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public navFix: boolean = false;

  constructor( private apiService : ApiService ) { }

  ngOnInit(): void {
    this.apiService.cart.subscribe( data => {
      
      if(data.data){
        console.log(data.data)
        this.navFix = true;
      }
    });
  }

  handleChange(){
    if(this.navFix){
      this.navFix = !this.navFix;
    }
  }

}
