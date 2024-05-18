import { Component } from '@angular/core';
import { SpecialityService } from '../../services/speciality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrl: './speciality.component.css'
})
export class SpecialityComponent {
  specialities!: any[];

  constructor(private blogService: SpecialityService, private router: Router) { }

  ngOnInit(): void {
    this.specialities = this.blogService.getAllBlogItems();
  }

  onSelectSpeciality(id: number) {
    this.router.navigate(['/speciality', id]);
  }
}

