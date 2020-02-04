import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FLIGHTS } from '../mock-flights';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flightData = FLIGHTS;
  leavingFrom: string;
  goingTo: string;
  departDate: string;
  returnDate: string;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.leavingFrom = params.leavingFrom;
        this.goingTo = params.goingTo;
        this.departDate = params.departDate;
        this.returnDate = params.returnDate;

      }
    );
  }
  bookTicket() {
    this.router.navigate(['userLogin']);
  }
}
