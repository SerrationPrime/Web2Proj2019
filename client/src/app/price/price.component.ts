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
  ticketsUri = "api/Tickets";
  public priceArray = null;
  public currentPrice: string;
  public currentType: string;
  public ticketConfirmation: string = "";

  public tickets = 1;
  public users = 1;
  public priceTypes;
  public prices: Array<number>;
  public jwt;

  constructor(private ngZone: NgZone, private http: HttpClient) {
  }

  ngOnInit() {

    this.priceTypes = [];
    this.jwt = localStorage.jwt;
      this.http.get(this.pricesUri).subscribe(data => {
        this.priceArray = data;
        this.priceSelection();
        
      });

  }

  buyTicket() {
    let ticketType: number = 1;

    if (this.jwt) {
      ticketType = this.tickets;
    }

    this.http.post(this.ticketsUri, ticketType).subscribe((data) => {
      this.ticketConfirmation = "Successfully bought a " + data['TicketType'].Type + " ticket! Your ticket ID is " + data['Id'] + ".";
    }), (error) => {
      console.log(error);
      if (error.number === 403) {
        this.ticketConfirmation = "You are not allowed to buy that type of ticket.";
      }
      else {
        this.ticketConfirmation = "Ticket could not be bought. You have not been billed. Try again later."
      }
    };
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
