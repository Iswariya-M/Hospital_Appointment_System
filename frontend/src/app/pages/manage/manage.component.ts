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
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {
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
    this.http.get< Doctor[]>('http://localhost:3000/doctors')
      .subscribe(data => {
        this.doctors = data;
      });
  }

 

  deleteDoctor(id: number) {
    this.http.delete(`http://localhost:3000/doctors/${id}`)
      .subscribe(
        () => {
          this.getDoctors();
        },
        error => {
          console.error('Error deleting doctor:', error);
        }
      );
  }

}
