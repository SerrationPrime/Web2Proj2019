import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-view-schedules',
  templateUrl: './admin-view-schedules.component.html',
  styleUrls: ['./admin-view-schedules.component.css']
})
export class AdminViewSchedulesComponent implements OnInit {

  public lineArray;
  public schedulesArray;

  public selectedLine;
  public selectedDay;

  public schedule;
  public scheduleText;

  linesUri = "api/Lines";
  schedulesUri = "api/Schedules";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.linesUri).subscribe(data => {
      this.lineArray = data;
      this.selectedLine = this.lineArray[0];
      this.selectedDay = 0;
    })
    this.http.get(this.schedulesUri).subscribe(data => {
      this.schedulesArray = data;
    })

    this.reinitSchedule();
    this.scheduleSelection();
  }

  reinitSchedule() {
    this.schedule = { departures: "No schedules for that day and line.", Id: -1, Line: this.selectedLine, Weekday: -1 };
  }

  commit() {
    this.http.put(this.schedulesUri + "/" + this.schedule.id, this.schedule).subscribe(() => {
      location.reload();
    });
  }

  scheduleSelection() {
    if (this.selectedLine != null && this.selectedDay != null) {
      var index;
      var contains = false;
      for (index = 0; index < this.schedulesArray.length; ++index) {
        if (this.schedulesArray[index].Weekday == this.selectedDay && this.selectedLine.LineNumber == this.schedulesArray[index].Line.LineNumber) {
          this.schedule = this.schedulesArray[index];
          contains = true;
          break;
        }
      }
      if (!contains) {
        this.reinitSchedule();
      }
      this.scheduleText = this.schedule.departures;
    }
  }

}
