import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor( private apiService : ApiService ) { }

  handleChange(){
    this.apiService.cart.emit({
      data: false
    })
  }
  
}

