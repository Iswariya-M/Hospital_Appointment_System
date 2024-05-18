import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Doctor{
  id:number;
  doctor_name:string;
  speciality:string;
  dob:string;
  age:number;
  location:string;
  phone_number:string;
}



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  doctors: Doctor[] = [];
  doctorName!: string;
  speciality!: string;
  dob!: string;
  age!: number;
  location!: string;
  phoneNumber!: string;
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDoctors();
    
  }
  
  
  getDoctors() {
    this.http.get<any[]>('http://localhost:3000/doctors')
      .subscribe(data => {
        this.doctors = data;
      });
  }


  calculateAge() {
    if (this.dob) {
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    }
  }

  addDoctor() {
    if (this.age < 20) {
      alert('Age must be equal to or greater than 20.');
      return;
    }

    this.http.post('http://localhost:3000/doctors', { 
      doctorName: this.doctorName,
      speciality: this.speciality,
      dob: this.dob,
      age: this.age,
      location: this.location,
      phoneNumber: this.phoneNumber
    })
    .subscribe(
      () => {
        this.getDoctors();
        this.clearForm();
        alert('Doctor added successfully!');
      },
      error => {
        console.error('Error adding doctor:', error);
        alert('Error adding doctor. Please try again.');
      }
    );
  }



  clearForm() {
    this.doctorName = '';
    this.speciality = '';
    this.dob = '';
    this.age = 0;
    this.location = '';
    this.phoneNumber = '';
  }
}

