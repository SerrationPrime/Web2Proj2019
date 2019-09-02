import { Component, OnInit, Input, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { document } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-view-prices',
  templateUrl: './admin-view-prices.component.html',
  styleUrls: ['./admin-view-prices.component.css']
})


export class AdminViewPricesComponent implements OnInit {

  pricesUri = "api/Pricings";
  public priceArray = null;
  public currentPrice: string;
  public currentType: string;
  public ticketConfirmation: string = "";
  public newPrice;

  public tickets = 1;
  public users = 1;
  public priceTypes;
  public prices: Array<number>;

  constructor(private ngZone: NgZone, private http: HttpClient) {
  }

  ngOnInit() {

    this.priceTypes = [];
    this.http.get(this.pricesUri).subscribe(data => {
      this.priceArray = data;
      this.priceSelection();

    });

  }

  changePrice() {
    let sendingPrice = Number(this.newPrice);
    if (isNaN(sendingPrice)) {
      this.ticketConfirmation = "You need to put in a number.";
      return;
    }

    var combinedKey = this.tickets.toString() + this.users.toString();

    this.http.put(this.pricesUri+"/"+combinedKey,sendingPrice).subscribe((data) => {
      this.ticketConfirmation = "Price successfuly changed.";
      this.ngOnInit();
    }, (error) => {
      console.log(error);
      this.ticketConfirmation = "Price could not be changed.";
      if (error.number===403) {
        this.ticketConfirmation += " You shouldn't be here anyway.";
      }
    })
  }

  priceSelection() {
    if (this.priceArray === null) {
      this.currentPrice = "";
    }
    else {
      var combinedKey = this.tickets.toString() + this.users.toString();
      for (var i = 0; i < this.priceArray.length; i++) {
        if (combinedKey === this.priceArray[i].Id) {
          this.currentPrice = this.priceArray[i].Price;
          if (combinedKey === "11" || combinedKey === "21" || combinedKey === "31" || combinedKey === "41") {
            this.currentType = "Normal price with no discounts"
          }
          else {
            this.currentType = this.priceArray[i].TicketType.Type + " Price with " + this.priceArray[i].UserType.Type + " Discount.";
          }
          break;
        }
      }
    }
  }

}

