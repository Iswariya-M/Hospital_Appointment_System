import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Doctor {
  doctor_name: string;
  speciality: string;
}

interface Appointment{
  name: string;
  email: string;
  doctor: string;
  phone: string;
  date: string;
  timeSlot?: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  appointments!: Appointment[];
  name!: string;
  email!: string;
  doctor!: string;
  phone!: string;
  date!: string;
  message!: string;
  doctors: Doctor[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAppointments();
    this.getDoctors();
  }

  getAppointments() {
    this.http.get<Appointment[]>('http://localhost:3000/appointments')
      .subscribe(data => {
        this.appointments = data;
      });
  }

  getDoctors() {
    this.http.get<Doctor[]>('http://localhost:3000/doctorName')
      .subscribe(data => {
        console.log(data);
        this.doctors = data;
      });
  }

  addAppointment() {
    if (!this.name || !this.email || !this.doctor || !this.phone || !this.date) {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(this.phone)) {
      alert('Please enter a 10-digit phone number.');
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(this.date);
    if (selectedDate <= currentDate) {
      alert('Please select a date in the future.');
      return;
    }


    this.http.post('http://localhost:3000/appointments', {
      name: this.name,
      email: this.email,
      doctor: this.doctor,
      phone: this.phone,
      date: this.date
    }).subscribe(
      (response: any) => {
        this.getAppointments();
        alert('Appointment booked successfully!');
        this.router.navigate(['/success'], {
          state: { formData: { ...response, name: this.name, email: this.email, doctor: this.doctor, phone: this.phone, date: this.date } }
        });
        this.clearForm();
      },
      error => {
        this.message = error.error;
      }
    );
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.doctor = '';
    this.phone = '';
    this.date = '';
  }
}