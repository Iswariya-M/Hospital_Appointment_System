import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Appointment {
  name: string;
  email: string;
  doctor: string;
  phone: string;
  date: string;
  time_slot:string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class ViewComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.http.get<Appointment[]>('http://localhost:3000/appointments')
      .subscribe(
        (data) => {
          this.appointments = data;
        },
        (error) => {
          console.error('Error fetching appointments:', error);
        }
      );
  }
}
