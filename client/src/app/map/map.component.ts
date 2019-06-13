import { Component, OnInit, Input, NgZone } from '@angular/core';
import { MarkerInfo } from './model/marker-info.model';
import { GeoLocation } from './model/geolocation';
import { Polyline } from './model/polyline';
import { HttpClient } from '@angular/common/http';
import { Polygon } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  styles: ['agm-map {height: 500px; width: 700px;}'] //postavljamo sirinu i visinu mape
})

export class MapComponent implements OnInit {
  markerInfo: MarkerInfo;
  public polylines: Array<Polyline>;
 
  public zoom: number;
  public lineArray;
  
  linesUri = "api/Lines";

  constructor(private ngZone: NgZone, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.linesUri).subscribe(data => {
      this.lineArray = data;
      console.log(this.lineArray);

      this.polylines = [];

      for (var i = 0; i < this.lineArray.length; i++)
      {
        this.polylines.push(new Polyline([], 'red', { url: "assets/busicon.png", scaledSize: { width: 50, height: 50 } }));
        var line = this.lineArray[i];
        for (var j = 0; j < line.Stations.length; j++)
        {
          this.polylines[i].addLocation(new GeoLocation(line.Stations[j].Latitude, line.Stations[j].Longitude));
        }
      }
      console.log(this.polylines)      
    });

    this.markerInfo = new MarkerInfo(new GeoLocation(45.242268, 19.842954),
      "assets/ftn.png",
      "Jugodrvo" , "" , "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
  }

  placeMarker($event){
    
  }

}
