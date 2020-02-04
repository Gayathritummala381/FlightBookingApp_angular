import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {

  leavingFrom = '';
  goingTo = '';
  departDate = '';
  returnDate = '';



  constructor(private router: Router) { }

  ngOnInit() {
  }
  processData() {

    this.router.navigate(['flightDetails'], {
      queryParams: {
        leavingFrom: this.leavingFrom,
        goingTo: this.goingTo,
        departDate: this.departDate,
        returnDate: this.returnDate,
      }
    });
  }
}
