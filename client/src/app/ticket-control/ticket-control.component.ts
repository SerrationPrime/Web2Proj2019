import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-control',
  templateUrl: './ticket-control.component.html',
  styleUrls: ['./ticket-control.component.css']
})
export class TicketControlComponent implements OnInit {
  public message: string;
  public ticketId: string;
  private pathPrefix = "/api/Tickets/"

  constructor(private http: HttpClient) { }

  

  ngOnInit() {
    this.message = "";
    this.ticketId = "";
  }

  checkTicket() {
    if (this.ticketId === "") {
      this.message = "You need to input a ticket ID.";
      return;
    }
    let path = this.pathPrefix + this.ticketId;
    this.http.get(path).subscribe(data => {
      if (data == false) {
        this.message = "The ticket is not valid.";
      }
      else {
        this.message = "The ticket is valid.";
      }
    })
  }

}
