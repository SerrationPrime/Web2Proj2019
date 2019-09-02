import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-admin-view-lines',
  templateUrl: './admin-view-lines.component.html',
  styleUrls: ['./admin-view-lines.component.css']
})
export class AdminViewLinesComponent implements OnInit {
  public lineArray;
  public stationArray;
  public currStationArray;
  public selectedLine
  public selectedStation;
  public selectedLineStation;

  public originalLineNum;

  public newNumber;

  public modifiedLine;
  linesUri = "api/Lines";
  stationsUri = "api/Stations";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.linesUri).subscribe(data => {
      this.lineArray = data;
    })
    this.http.get(this.stationsUri).subscribe(data => {
      this.stationArray = data;
    })
  }

  lineSelection() {
    this.currStationArray = this.selectedLine.Stations;
    this.modifiedLine = this.selectedLine;
    this.originalLineNum = this.modifiedLine.lineNumber;
  }

  changeNumber() {
    let x = Number(this.newNumber);
    if (!isNaN(x)) {
      this.modifiedLine.LineNumber = x;
    }
  }

  addStation() {
    if (!this.modifiedLine.Stations.includes(this.selectedStation)) {
      this.modifiedLine.Stations.push(this.selectedStation);
    }
    console.log(this.modifiedLine.Stations);
  }

  removeStation() {
    this.modifiedLine.Stations.splice(this.selectedLineStation, 1)
  }

  commit() {
    this.http.put(this.linesUri + "/" + this.originalLineNum, this.modifiedLine).subscribe(() => {
      location.reload();
    (error) => console.log(error)})
  }

  trackByIdentity(index: number, item: any) { return item };

}
