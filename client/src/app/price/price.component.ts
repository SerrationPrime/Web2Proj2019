import { Component, OnInit, Input, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { document } from 'ngx-bootstrap';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})


export class PriceComponent implements OnInit {

  pricesUri = "api/Pricings";
  public priceArray = null;
  public currentPrice: string;
  public currentType: string;

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
