import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListingOfProducts';
}

export class Manager {

  name: string;
  price: number;
  quantity: number;
  purchaseDate: any;
  sellDate: any;
  seller: string;
  buyer: string;
  sNumber: number;

  constructor(name: string, price: number, quantity: number, purchaseDate: string, sellDate: string, seller: string, buyer: string, sNumber: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.purchaseDate = purchaseDate;
    this.sellDate = sellDate;
    this.seller = seller;
    this.buyer = buyer;
    this.sNumber = sNumber;
  }
}
