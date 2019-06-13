import { Component, OnInit, Input, NgZone, Directive, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { document } from 'ngx-bootstrap';
import { Schedule } from './model/modelSchedule';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scheduleUri = "api/Schedules";
  public scheduleArray = null;
  public schedules: Array<Schedule>;

  constructor(private ngZone: NgZone, private http: HttpClient, private el: ElementRef) { }

  ngOnInit() {

    this.http.get(this.scheduleUri).subscribe(data => {
      this.scheduleArray = data;

      this.schedules = [];

      for (var i = 0; i < this.scheduleArray.length; i++) {
        let sch = new Schedule(this.scheduleArray[i].Departures, this.scheduleArray[i].Line.LineNumber);

        this.schedules.push(sch);
      }
      console.log(this.schedules);
    });

  }
}

