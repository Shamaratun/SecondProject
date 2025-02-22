import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormComponent} from './form/form.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListingOfProducts';
}

export class Manager {
  sNumber: number;
  name: string;
  price: number;
  quantity: number;
  purchaseDate: Date;
  sellDate: Date;
  seller: string;
  buyer: string;


  constructor( sNumber: number,name: string, price: number, quantity: number, purchaseDate: Date, sellDate: Date, seller: string, buyer: string) {
    this.sNumber = sNumber;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.purchaseDate = purchaseDate;
    this.sellDate = sellDate;
    this.seller = seller;
    this.buyer = buyer;
    
  }
}
